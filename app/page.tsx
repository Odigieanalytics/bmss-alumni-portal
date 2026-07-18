import Link from 'next/link';

// ============ NAV & HEADER ============
function Navigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] transition-all duration-400">
      <div className="flex items-center justify-between px-6 md:px-12 py-4 max-w-7xl mx-auto w-full">
        {/* Brand */}
        <Link href="#hero" className="flex items-center gap-3">
          <div className="text-gold font-display font-semibold text-sm">🎓</div>
          <div>
            <div className="text-sm font-bold leading-tight">BMSS Alumni</div>
            <div className="text-xs tracking-widest uppercase text-gold font-semibold">North America</div>
          </div>
        </Link>

        {/* Nav links - desktop only */}
        <nav className="hidden md:flex gap-8 items-center">
          <a href="#community" className="text-sm font-medium text-ivory-70 hover:text-ivory transition-colors">Community</a>
          <a href="#legacy" className="text-sm font-medium text-ivory-70 hover:text-ivory transition-colors">Our Legacy</a>
          <a href="#stories" className="text-sm font-medium text-ivory-70 hover:text-ivory transition-colors">Stories</a>
          <a href="#covenant" className="text-sm font-medium text-ivory-70 hover:text-ivory transition-colors">Constitution</a>
          <Link href="/login" className="text-sm font-medium text-gold">Member Sign In →</Link>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden text-ivory">☰</button>
      </div>
    </header>
  );
}

// ============ HERO SECTION ============
function HeroSection() {
  return (
    <section id="hero" className="min-h-screen relative flex items-center justify-center text-center overflow-hidden bg-navy-950 pt-24">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 opacity-80"></div>
      
      <div className="relative z-10 px-6 max-w-3xl mx-auto py-32">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-gold-25 bg-gold-12 mb-8 animate-pulse">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-gold animate-pulse"></span>
          <span className="text-xs tracking-widest uppercase text-gold font-semibold">
            Boys Model Secondary School · Evboneka
          </span>
        </div>

        {/* Main headline */}
        <h1 className="font-display text-6xl sm:text-7xl md:text-8xl font-medium leading-tight mb-8">
          Building <em className="italic text-gold not-italic bg-gradient-to-r from-gold via-yellow-200 to-gold bg-clip-text text-transparent">Brotherhood</em>
          <br />
          Beyond Borders
        </h1>

        {/* Subheading */}
        <p className="text-ivory-70 text-lg sm:text-xl max-w-2xl mx-auto mb-12">
          One school in Evboneka. One brotherhood across a continent. We connect old boys throughout the United States and Canada through welfare, mentorship, and a legacy we carry together.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center flex-wrap mb-16">
          <Link
            href="/login"
            className="px-8 py-4 rounded-full bg-gradient-to-br from-gold to-gold-deep text-navy-950 font-semibold font-medium hover:shadow-lg hover:shadow-gold/40 transition-all hover:-translate-y-1"
          >
            Member Log In →
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
            <div className="font-display text-5xl sm:text-6xl text-gold font-medium">49</div>
            <div className="text-xs tracking-widest uppercase text-ivory-50 font-semibold mt-2">Registered Brothers</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl sm:text-6xl text-gold font-medium">13</div>
            <div className="text-xs tracking-widest uppercase text-ivory-50 font-semibold mt-2">States & Provinces</div>
          </div>
          <div className="text-center">
            <div className="font-display text-5xl sm:text-6xl text-gold font-medium">2</div>
            <div className="text-xs tracking-widest uppercase text-ivory-50 font-semibold mt-2">Nations, One Bond</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ivory-50 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-0.5 h-12 bg-gradient-to-b from-gold to-transparent"></div>
      </div>
    </section>
  );
}

// ============ COMMUNITY SECTION ============
function CommunitySection() {
  return (
    <section id="community" className="py-20 sm:py-32 bg-gradient-to-b from-navy-950 to-navy-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Our Community</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-4">
            One brotherhood, <em className="italic text-gold not-italic">many postcodes</em>
          </h2>
          <p className="text-ivory-70 max-w-2xl mx-auto text-lg">
            From Georgia to Alberta, old boys of BMSS Evboneka are building lives across North America. Our members span across multiple cities and states, each contributing to the strength of our network.
          </p>
        </div>

        <div className="bg-navy-900 rounded-2xl border border-ivory-10 p-8 sm:p-12 mb-12">
          <div className="bg-gradient-to-b from-navy-800 to-navy-900 rounded-xl p-6 h-96 flex items-center justify-center text-ivory-50">
            [Interactive community map - showing member distribution by state/province]
          </div>
          <p className="text-center text-ivory-30 text-sm mt-4">Live counts from the 49-brother member database</p>
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
    { year: "The Beginning", title: "Evboneka, Edo State", desc: "Boys Model Secondary School shapes a generation of young men. Discipline, scholarship, and friendships forged on dusty fields." },
    { year: "The Diaspora", title: "Scattered, never severed", desc: "Old boys cross the Atlantic in pursuit of careers and family. Engineers, analysts, clinicians, and builders settling across the US and Canada." },
    { year: "2017", title: "It all started in Atlanta", desc: "Brothers gathered in Atlanta, Georgia for the very first reunion. One weekend of laughter and memory became the tradition." },
    { year: "2018 – 2019", title: "The tradition takes root", desc: "Houston hosts year two, then Jackson, Tennessee. The circle widens with every gathering." },
    { year: "2020", title: "The pause that proved the bond", desc: "Covid grounds the reunion, but the brotherhood holds tight across the distance." },
    { year: "2021 – 2025", title: "Coast to coast, border to border", desc: "Atlanta, Toronto, Houston, Miami, and Dallas. Dues, welfare, and records give the brotherhood structure." },
    { year: "2026", title: "Registered & rising", desc: "The association completes formal registration and heads to Chicago for reunion number nine, July 23 to 25." },
    { year: "Beyond", title: "Giving back to Evboneka", desc: "The next chapter reaches home: scholarships, school projects, and mentorship for the boys walking the halls we once did." },
  ];

  return (
    <section id="legacy" className="py-20 sm:py-32 bg-navy-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Our Legacy</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-4">
            The thread that <em className="italic text-gold not-italic">binds us</em>
          </h2>
          <p className="text-ivory-70 max-w-2xl mx-auto text-lg">
            Follow the gold thread. From classrooms in Evboneka to a registered association spanning two countries, this is how the brotherhood was built.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold to-gold-deep"></div>

          {/* Timeline items */}
          <div className="space-y-16">
            {timelineEvents.map((event, idx) => (
              <div key={idx} className="relative">
                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full bg-navy-950 border-2 border-gold shadow-lg shadow-gold/50"></div>

                {/* Content */}
                <div className={`${idx % 2 === 0 ? 'mr-auto pr-12 w-1/2 text-right' : 'ml-auto pl-12 w-1/2'}`}>
                  <div className="font-display text-3xl text-gold font-medium italic">{event.year}</div>
                  <h3 className="text-2xl font-bold mt-2">{event.title}</h3>
                  <p className="text-ivory-70 text-base mt-2">{event.desc}</p>
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
      desc: "When a brother said 'I do,' the association stood beside him with a collective gift from every member, presented with pride at his wedding.",
      amount: "$1,000 wedding support"
    },
    {
      icon: "🤲",
      title: "Welfare when it matters",
      desc: "Life happens. Our welfare fund quietly supports brothers through hard seasons. No forms, no ceremony, just family doing what family does.",
      amount: "Standing welfare fund"
    },
    {
      icon: "🎂",
      title: "Every birthday, remembered",
      desc: "No brother's birthday passes unmarked. Gift cards and a chorus of messages from across two countries. Small gestures, deep roots.",
      amount: "Every member, every year"
    }
  ];

  return (
    <section id="stories" className="py-20 sm:py-32 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Brotherhood in Action</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-4">
            Not just an association. <em className="italic text-gold not-italic">A safety net.</em>
          </h2>
          <p className="text-ivory-70 max-w-2xl mx-auto text-lg">
            Every dollar of dues becomes something human. These are real ways the brotherhood showed up this year.
          </p>
        </div>

        {/* Stories grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {stories.map((story, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-navy-850 to-navy-900 rounded-2xl border border-ivory-10 p-8 hover:border-gold-25 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="text-5xl mb-6">{story.icon}</div>
              <h3 className="font-display text-2xl font-medium mb-3">{story.title}</h3>
              <p className="text-ivory-70 text-base mb-4">{story.desc}</p>
              <div className="font-display italic text-gold text-lg">{story.amount}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============ CONSTITUTION/COVENANT SECTION ============
function CovenantSection() {
  return (
    <section id="covenant" className="py-20 sm:py-32 bg-navy-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-gold"></div>
            <span className="text-xs tracking-widest uppercase text-gold font-semibold">Written Into Our Constitution</span>
          </div>
          <h2 className="font-display text-5xl md:text-6xl font-medium mb-4">
            Not just promises. <em className="italic text-gold not-italic">Provisions.</em>
          </h2>
          <p className="text-ivory-70 max-w-2xl mx-auto text-lg">
            Brotherhood here is codified. Articles V and VI of our constitution spell out exactly how we stand by each other, and by the school that raised us.
          </p>
        </div>

        {/* Covenant card */}
        <div className="bg-gradient-to-br from-navy-850 to-navy-900 rounded-2xl border border-gold-25 p-8 sm:p-12 mb-12">
          <div className="text-6xl text-gold/20 mb-4 font-display">"</div>
          <p className="text-ivory text-lg mb-6 leading-relaxed">
            We, the alumni of Boys Model Secondary School Evboneka residing in North America, united by our shared heritage and commitment to the growth of our alma mater and the welfare of our members…
          </p>
          <div className="text-gold text-sm font-semibold mb-6">Preamble · The Constitution · Amendment III</div>

          {/* Benefits list */}
          <div className="space-y-4 mb-8">
            <div className="flex gap-4 pb-4 border-b border-ivory-10">
              <div className="font-display text-2xl text-gold font-medium">$1,000</div>
              <div>
                <div className="text-ivory font-medium">Wedding or ordination gift</div>
                <div className="text-gold text-xs font-semibold">Article V · Welfare</div>
              </div>
            </div>
            <div className="flex gap-4 pb-4 border-b border-ivory-10">
              <div className="font-display text-2xl text-gold font-medium">$1,000</div>
              <div>
                <div className="text-ivory font-medium">Bereavement support, immediate family</div>
                <div className="text-gold text-xs font-semibold">Article V · Welfare</div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="font-display text-2xl text-gold font-medium">$2,000</div>
              <div>
                <div className="text-ivory font-medium">Support on the passing of a brother</div>
                <div className="text-gold text-xs font-semibold">Article V · Welfare</div>
              </div>
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
      <Navigation />
      <HeroSection />
      <CommunitySection />
      <TimelineSection />
      <StoriesSection />
      <CovenantSection />
      <FooterSection />
    </main>
  );
}
