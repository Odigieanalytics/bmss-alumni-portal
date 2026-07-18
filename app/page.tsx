import Link from 'next/link';

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section className="min-h-screen relative flex items-center justify-center text-center overflow-hidden bg-navy-950">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 opacity-80"></div>
      
      <div className="relative z-10 px-6 max-w-2xl mx-auto py-32">
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold-25 bg-gold-12 mb-8 animate-fade-in">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
          <span className="text-xs tracking-widest uppercase text-gold font-semibold">
            Boys Model Secondary School · Evboneka
          </span>
        </div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-medium leading-tight mb-8">
          Building <em className="italic text-gold not-italic">Brotherhood</em>
          <br />
          Beyond Borders
        </h1>

        <p className="text-ivory-70 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          One school in Evboneka. One brotherhood across a continent. We connect old boys throughout the United States and Canada through welfare, mentorship, and a legacy we carry together.
        </p>

        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Link
            href="/login"
            className="px-8 py-4 rounded-full bg-gradient-to-br from-gold to-gold-deep text-navy-950 font-semibold font-medium hover:shadow-lg hover:shadow-gold/40 transition-all hover:-translate-y-1"
          >
            Member Sign In →
          </Link>
          <a
            href="#community"
            className="px-8 py-4 rounded-full bg-ivory/5 border border-ivory-30 text-ivory font-semibold hover:border-gold hover:text-gold transition-all"
          >
            Explore Our Community
          </a>
        </div>

        {/* Stats */}
        <div className="flex gap-8 sm:gap-16 justify-center flex-wrap">
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl text-gold font-medium">48</div>
            <div className="text-xs tracking-widest uppercase text-ivory-50 font-semibold mt-2">Registered Brothers</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl text-gold font-medium">13</div>
            <div className="text-xs tracking-widest uppercase text-ivory-50 font-semibold mt-2">States & Provinces</div>
          </div>
          <div className="text-center">
            <div className="font-display text-4xl sm:text-5xl text-gold font-medium">2</div>
            <div className="text-xs tracking-widest uppercase text-ivory-50 font-semibold mt-2">Nations, One Bond</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
}

// ============ COMMUNITY SECTION ============
function CommunitySection() {
  return (
    <section id="community" className="py-20 sm:py-28 bg-gradient-to-b from-navy-950 to-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Our Community</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-4">
            One brotherhood, <em className="italic text-gold not-italic">many postcodes</em>
          </h2>
          <p className="text-ivory-70 max-w-2xl mx-auto">
            From Georgia to Alberta, old boys of BMSS Evboneka are building lives across North America. Our members span across multiple cities and states, each contributing to the strength of our network.
          </p>
        </div>

        <div className="bg-navy-900 rounded-2xl border border-ivory-10 p-6 sm:p-10 mb-8">
          <div className="bg-gradient-to-b from-navy-800 to-navy-900 rounded-xl p-4 h-64 sm:h-96 flex items-center justify-center text-ivory-50 text-sm">
            [Interactive community map would display here - showing cities with member counts]
          </div>
          <p className="text-center text-ivory-30 text-sm mt-4">Live counts from the 48-brother member database</p>
        </div>

        <div className="text-center">
          <Link
            href="/portal/directory"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-br from-gold to-gold-deep text-navy-950 font-semibold hover:shadow-lg hover:shadow-gold/40 transition-all hover:-translate-y-1"
          >
            Open the Member Directory →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============ LEGACY TIMELINE SECTION ============
function TimelineSection() {
  const timelineEvents = [
    { year: "The Beginning", title: "Evboneka, Edo State", desc: "Boys Model Secondary School shapes a generation of young men." },
    { year: "The Diaspora", title: "Scattered, never severed", desc: "Old boys cross the Atlantic in pursuit of careers and family." },
    { year: "2017", title: "It all started in Atlanta", desc: "Brothers gathered for the very first reunion." },
    { year: "2018 – 2019", title: "The tradition takes root", desc: "Houston hosts year two, then Jackson, Tennessee." },
    { year: "2020", title: "The pause that proved the bond", desc: "Covid grounds the reunion, but the brotherhood holds tight." },
    { year: "2021 – 2025", title: "Coast to coast, border to border", desc: "Atlanta, Toronto, Houston, Miami, and Dallas reunions." },
    { year: "2026", title: "Registered & rising", desc: "Chicago hosts reunion number nine, July 23 to 25." },
  ];

  return (
    <section id="legacy" className="py-20 sm:py-28 bg-navy-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Our Legacy</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-4">
            The thread that <em className="italic text-gold not-italic">binds us</em>
          </h2>
          <p className="text-ivory-70 max-w-2xl mx-auto">
            Follow the gold thread. From classrooms in Evboneka to a registered association spanning two countries, this is how the brotherhood was built.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold to-gold-deep"></div>

          {/* Timeline items */}
          <div className="space-y-12">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative">
                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-navy-950 border-2 border-gold shadow-lg shadow-gold/50"></div>

                {/* Content */}
                <div className={`${idx % 2 === 0 ? 'mr-auto pr-12 w-1/2 text-right' : 'ml-auto pl-12 w-1/2'}`}>
                  <div className="font-display text-2xl sm:text-3xl text-gold font-medium italic">{event.year}</div>
                  <h3 className="text-lg sm:text-xl font-bold mt-2">{event.title}</h3>
                  <p className="text-ivory-70 text-sm mt-1">{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============ STORIES SECTION ============
function StoriesSection() {
  const stories = [
    {
      icon: "💍",
      title: "Celebrating our own",
      desc: "When a brother said 'I do,' the association stood beside him with a collective gift from every member.",
      amount: "$1,000 wedding support"
    },
    {
      icon: "🤲",
      title: "Welfare when it matters",
      desc: "Life happens. Our welfare fund quietly supports brothers through hard seasons. No forms, no ceremony, just family.",
      amount: "Standing welfare fund"
    },
    {
      icon: "🎂",
      title: "Every birthday, remembered",
      desc: "No brother's birthday passes unmarked. Gift cards and a chorus of messages from across two countries.",
      amount: "Every member, every year"
    }
  ];

  return (
    <section id="stories" className="py-20 sm:py-28 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Brotherhood in Action</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-4">
            Not just an association. <em className="italic text-gold not-italic">A safety net.</em>
          </h2>
          <p className="text-ivory-70 max-w-2xl mx-auto">
            Every dollar of dues becomes something human. These are real ways the brotherhood showed up this year.
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-navy-850 to-navy-900 rounded-2xl border border-ivory-10 p-8 hover:border-gold-25 hover:shadow-lg transition-all"
            >
              <div className="text-4xl mb-6">{story.icon}</div>
              <h3 className="font-display text-xl font-medium mb-3">{story.title}</h3>
              <p className="text-ivory-70 text-sm mb-4">{story.desc}</p>
              <div className="font-display italic text-gold">{story.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ IMPACT COUNTERS SECTION ============
function ImpactSection() {
  const impacts = [
    { number: "48", label: "Active Brothers", icon: "👥" },
    { number: "$19.6k", label: "Welfare Funded", icon: "🤝" },
    { number: "9", label: "Annual Reunions", icon: "🎉" },
    { number: "100%", label: "Birthdays Celebrated", icon: "🎂" }
  ];

  return (
    <section className="py-20 sm:py-28 bg-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-6">
          {impacts.map((impact, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gold-12 to-transparent border border-gold-25 rounded-2xl p-8 text-center hover:border-gold transition-all"
            >
              <div className="text-4xl mb-4">{impact.icon}</div>
              <div className="font-display text-5xl sm:text-6xl text-gold font-medium mb-3">
                {impact.number}
              </div>
              <div className="text-sm tracking-widest uppercase text-ivory-50">
                {impact.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ EXECUTIVE DIRECTORY SECTION ============
function ExecutiveSection() {
  const executives = [
    { name: "Lawrence Odigie", title: "President", icon: "👑" },
    { name: "Chisom Anyanwu", title: "Vice President", icon: "🎖️" },
    { name: "Chukwuma Eze", title: "General Secretary", icon: "📋" },
    { name: "Uche Eze", title: "Financial Secretary", icon: "💰" },
    { name: "David Okafor", title: "Treasurer", icon: "🏦" }
  ];

  return (
    <section id="leadership" className="py-20 sm:py-28 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Leadership</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-4">
            The executive <em className="italic text-gold not-italic">committee</em>
          </h2>
          <p className="text-ivory-70 max-w-2xl mx-auto">
            Five brothers steering the organization. All volunteers. All committed.
          </p>
        </div>

        {/* Executives grid */}
        <div className="grid md:grid-cols-5 gap-6">
          {executives.map((exec, idx) => (
            <div key={idx} className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gold-25 to-gold-12 border-2 border-gold flex items-center justify-center text-4xl">
                {exec.icon}
              </div>
              <h3 className="font-display text-lg font-medium mb-1">{exec.name}</h3>
              <p className="text-gold text-sm font-semibold">{exec.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONSTITUTION HIGHLIGHTS SECTION ============
function ConstitutionSection() {
  return (
    <section id="covenant" className="py-20 sm:py-28 bg-navy-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Our Covenant</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-medium mb-4">
            The constitution <em className="italic text-gold not-italic">that binds</em>
          </h2>
          <p className="text-ivory-70 max-w-2xl mx-auto mb-12">
            Adopted April 2026. Eighteen articles defining who we are and how we serve.
          </p>
        </div>

        {/* Key Articles */}
        <div className="space-y-4 mb-10">
          <div className="bg-gradient-to-r from-gold-12 to-transparent border border-gold-25 rounded-xl p-6 hover:border-gold transition-all">
            <h3 className="text-gold font-semibold text-sm tracking-widest uppercase mb-2">Article I: Purpose</h3>
            <p className="text-ivory-70">To foster brotherhood, welfare, and mentorship among members.</p>
          </div>
          <div className="bg-gradient-to-r from-gold-12 to-transparent border border-gold-25 rounded-xl p-6 hover:border-gold transition-all">
            <h3 className="text-gold font-semibold text-sm tracking-widest uppercase mb-2">Article IV: Welfare</h3>
            <p className="text-ivory-70">Support members through weddings, illness, loss, and life transitions via collective fund.</p>
          </div>
          <div className="bg-gradient-to-r from-gold-12 to-transparent border border-gold-25 rounded-xl p-6 hover:border-gold transition-all">
            <h3 className="text-gold font-semibold text-sm tracking-widest uppercase mb-2">Article VIII: Executive Committee</h3>
            <p className="text-ivory-70">Five officers elected annually by members; quorum and voting procedures defined.</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/portal/documents"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gold text-gold font-semibold hover:bg-gold hover:text-navy-950 transition-all"
          >
            Read the Full Constitution →
          </Link>
        </div>
      </div>
    </section>
  );
}

// ============ FOOTER SECTION ============
function FooterSection() {
  return (
    <footer className="bg-navy-900 border-t border-ivory-10 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-display text-2xl font-medium text-gold mb-2">BMSS Alumni</div>
            <p className="text-ivory-50 text-sm">North America Chapter</p>
            <p className="text-ivory-30 text-xs mt-4">Founded in Evboneka, Nigeria. Registered as an association 2026.</p>
          </div>

          {/* Portal Links */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-ivory mb-4">Portal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/login" className="text-ivory-70 hover:text-gold transition-colors">
                  Sign In
                </Link>
              </li>
              <li>
                <Link href="/portal/directory" className="text-ivory-70 hover:text-gold transition-colors">
                  Member Directory
                </Link>
              </li>
              <li>
                <Link href="/portal/dues" className="text-ivory-70 hover:text-gold transition-colors">
                  Dues Status
                </Link>
              </li>
            </ul>
          </div>

          {/* Public Links */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-ivory mb-4">Learn</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#legacy" className="text-ivory-70 hover:text-gold transition-colors">
                  Our Legacy
                </a>
              </li>
              <li>
                <a href="#stories" className="text-ivory-70 hover:text-gold transition-colors">
                  Brotherhood Stories
                </a>
              </li>
              <li>
                <a href="#covenant" className="text-ivory-70 hover:text-gold transition-colors">
                  The Constitution
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-sm tracking-widest uppercase text-ivory mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-ivory-70">Lawrence Odigie</li>
              <li className="text-ivory-70">President</li>
              <li className="text-gold">bmss.alumni.na@example.com</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ivory-10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ivory-50">
          <p>&copy; 2026 BMSS Alumni North America. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gold transition-colors">Privacy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ============ MAIN EXPORT ============
export default function Home() {
  return (
    <main className="bg-navy-950 text-ivory">
      <HeroSection />
      <CommunitySection />
      <TimelineSection />
      <StoriesSection />
      <ImpactSection />
      <ExecutiveSection />
      <ConstitutionSection />
      <FooterSection />
    </main>
  );
}
