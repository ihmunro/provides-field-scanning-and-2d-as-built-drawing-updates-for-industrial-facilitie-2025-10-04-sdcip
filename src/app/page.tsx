import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main>
      <header className="fixed w-full bg-background/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="text-xl font-semibold text-foreground hover:text-primary transition-colors">AsBuilt</a>
            <button id="menu-btn" className="md:hidden text-muted-foreground" aria-label="Toggle menu">☰</button>
            <div className="hidden md:flex items-center gap-4" id="menu">
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">Features</a>
              <a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</a>
              <a href="#testimonials" className="text-muted-foreground hover:text-primary transition-colors">Testimonials</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</a>
              <a href="#faq" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Transform Your Facility Documentation with Precision Scanning
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10">
              Industry-Leading As-Built Documentation Services with 99.9% Accuracy Guarantee
            </p>
            <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all shadow">
              Schedule Your Scan Today
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Advanced Scanning Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Rapid Facility Scans</h3>
              <p className="text-muted-foreground leading-relaxed">Complete large-scale facility scans within hours, not days, with minimal disruption to operations.</p>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-4">As-Built Drawing Updates</h3>
              <p className="text-muted-foreground leading-relaxed">Accurate 2D documentation aligned to your standards. Delivered in DWG, RVT and more.</p>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-4">QA and Verification</h3>
              <p className="text-muted-foreground leading-relaxed">Multi-phase verification pipeline ensures millimeter-level accuracy and consistency.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Operational Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Faster Turnarounds</h3>
              <p className="text-muted-foreground">Typical delivery in 5–7 business days with rush options available.</p>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Minimal Disruption</h3>
              <p className="text-muted-foreground">Non-intrusive scanning around active operations and off-peak scheduling.</p>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <h3 className="text-xl font-semibold mb-2">Cost Optimization</h3>
              <p className="text-muted-foreground">Save up to 40% vs. traditional methods with superior deliverables.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <div className="flex items-center mb-4"><div className="text-yellow-500">★★★★★</div><span className="ml-2 text-muted-foreground">(5.0)</span></div>
              <p className="text-foreground/90 mb-4">"AsBuilt's scanning service reduced our documentation time by 70%. The accuracy of their as-built drawings has been invaluable for our renovation projects."</p>
              <div className="font-semibold">Sarah Chen</div>
              <div className="text-sm text-muted-foreground">Facility Manager, Global Chemical Corp</div>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <div className="flex items-center mb-4"><div className="text-yellow-500">★★★★★</div><span className="ml-2 text-muted-foreground">(5.0)</span></div>
              <p className="text-foreground/90 mb-4">"The team's efficiency and professionalism were outstanding. They completed our entire facility scan in just one day with minimal disruption to operations."</p>
              <div className="font-semibold">Michael Rodriguez</div>
              <div className="text-sm text-muted-foreground">Project Director, Industrial Solutions Inc</div>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <div className="flex items-center mb-4"><div className="text-yellow-500">★★★★★</div><span className="ml-2 text-muted-foreground">(5.0)</span></div>
              <p className="text-foreground/90 mb-4">"Their attention to detail and quality control processes are unmatched. The as-built drawings perfectly matched our facility's current state."</p>
              <div className="font-semibold">Emma Thompson</div>
              <div className="text-sm text-muted-foreground">Engineering Manager, Advanced Manufacturing Ltd</div>
            </div>
            <div className="bg-card text-card-foreground p-8 rounded-xl border border-border shadow-sm">
              <div className="flex items-center mb-4"><div className="text-yellow-500">★★★★★</div><span className="ml-2 text-muted-foreground">(5.0)</span></div>
              <p className="text-foreground/90 mb-4">"AsBuilt's transparent pricing and rapid delivery exceeded our expectations. We've made them our go-to partner for all facility documentation needs."</p>
              <div className="font-semibold">David Park</div>
              <div className="text-sm text-muted-foreground">Operations Director, Tech Industries</div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About AsBuilt</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <p className="text-foreground/90 leading-relaxed">Founded in 2018, AsBuilt emerged from a vision to revolutionize industrial facility documentation. Our founders, with over 30 years of combined experience in industrial engineering and 3D scanning technology, recognized the critical need for more efficient and accurate as-built documentation services.</p>
            <p className="text-foreground/90 leading-relaxed">Our mission is to deliver unparalleled accuracy and efficiency in facility documentation while minimizing operational disruption. Through continuous investment in cutting-edge technology and expert team development, we're committed to setting new industry standards for as-built documentation services.</p>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="border border-border rounded-lg p-6 bg-card text-card-foreground"><h3 className="text-lg font-semibold mb-3">Typical turnaround time?</h3><p className="text-muted-foreground">Most projects deliver in 5–7 business days after scanning. Large facilities may require additional processing.</p></div>
            <div className="border border-border rounded-lg p-6 bg-card text-card-foreground"><h3 className="text-lg font-semibold mb-3">How do you ensure accuracy?</h3><p className="text-muted-foreground">Multi-phase verification using modern equipment and redundant QC checks; typically within 1mm for most applications.</p></div>
            <div className="border border-border rounded-lg p-6 bg-card text-card-foreground"><h3 className="text-lg font-semibold mb-3">Can you work around operations?</h3><p className="text-muted-foreground">Yes. We coordinate with facility management and can schedule off-peak.</p></div>
            <div className="border border-border rounded-lg p-6 bg-card text-card-foreground"><h3 className="text-lg font-semibold mb-3">Which file formats?</h3><p className="text-muted-foreground">AutoCAD (.dwg), Revit (.rvt), and other industry-standard formats. Custom formats on request.</p></div>
            <div className="border border-border rounded-lg p-6 bg-card text-card-foreground"><h3 className="text-lg font-semibold mb-3">Do you offer support?</h3><p className="text-muted-foreground">30 days complimentary support post-delivery; extended packages available.</p></div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-muted">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Transform Your Facility Documentation Today</h2>
            <p className="text-xl text-muted-foreground mb-10">Schedule a consultation to discuss your specific needs and receive a customized solution</p>
            <a href="mailto:iainhmunro@gmail.com" className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transform hover:scale-105 transition-all shadow">
              Get Your Custom Quote
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4">AsBuilt</h3>
              <p className="text-background/70">Transforming industrial facility documentation with precision and efficiency.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact</h3>
              <a href="mailto:iainhmunro@gmail.com" className="text-background/80 hover:text-background transition-colors">iainhmunro@gmail.com</a>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="text-background/80 hover:text-background transition-colors">Features</a></li>
                <li><a href="#contact" className="text-background/80 hover:text-background transition-colors">Contact</a></li>
                <li><a href="/privacy" className="text-background/80 hover:text-background transition-colors">Privacy</a></li>
                <li><a href="/terms" className="text-background/80 hover:text-background transition-colors">Terms</a></li>
                <li><a href="/blog" className="text-background/80 hover:text-background transition-colors">Blog</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/70">
            <p>© 2024 AsBuilt. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
