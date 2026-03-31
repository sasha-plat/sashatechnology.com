import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { locales } from "../../../i18n/locales";
import HeroSection from "../../../components/HeroSection";
import SpecsTable from "../../../components/SpecsTable";
import FeatureCard from "../../../components/FeatureCard";
import FAQAccordion from "../../../components/FAQAccordion";

interface VariantData {
  name: string;
  tagline: string;
  price: string;
  availability: string;
  description: string;
  features: { icon: string; title: string; description: string }[];
  specs: { label: string; value: string }[];
  useCases: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
}

const variantData: Record<string, VariantData> = {
  guard: {
    name: "B1 Guard",
    tagline: "86h Silent Guardian",
    price: "TBD",
    availability: "Q3 2027",
    description:
      "The B1 Guard is being designed for continuous perimeter surveillance. With 86 hours of perch-and-stare mode and AI-powered intrusion detection, it aims to replace traditional camera systems at a fraction of the cost.",
    features: [
      { icon: "\ud83d\udc41", title: "Perch & Stare", description: "86 hours of continuous monitoring from a fixed position. Wakes on motion, conserving power for days of unattended operation." },
      { icon: "\ud83d\udea8", title: "AI Intrusion Alert", description: "On-device person/vehicle classification triggers instant alerts to your phone or command center via encrypted mesh." },
      { icon: "\ud83c\udf0c", title: "Day/Night Vision", description: "High-resolution thermal + visible light fusion provides 24/7 coverage regardless of lighting or weather conditions." },
    ],
    specs: [
      { label: "Weight", value: "70g" },
      { label: "Wingspan", value: "240mm (deployed)" },
      { label: "Propulsion", value: "PZT Bimorph + EDF 20mm" },
      { label: "Flight Endurance", value: "~56min hover / ~75min cruise" },
      { label: "Perch Endurance", value: "86 hours" },
      { label: "Thermal Sensor", value: "High-resolution uncooled thermal" },
      { label: "Thermal Resolution", value: "640 \u00D7 480 @ 12\u00B5m" },
      { label: "Thermal Sensitivity", value: "Military-grade" },
      { label: "Speed", value: "40 km/h cruise / 90 km/h dash" },
      { label: "Range", value: "2 km round-trip" },
      { label: "Battery", value: "Ultra-light, high-density" },
      { label: "Charging", value: "Magnetic pogo dock" },
      { label: "Comms", value: "BLE 6.0 + LoRa" },
      { label: "Noise @ 10m", value: "< 25 dB(A)" },
      { label: "Operating Temp", value: "-10\u00B0C to +50\u00B0C" },
    ],
    useCases: [
      { title: "Estate Security", description: "Deploy 3-4 units around a property perimeter for 360\u00B0 coverage. Each unit perches on fences, trees, or rooftops and monitors continuously for days." },
      { title: "Construction Site Monitoring", description: "Protect high-value equipment and materials overnight. The Guard detects and alerts on unauthorized entry, recording thermal evidence for insurance." },
      { title: "Event Security", description: "Supplement fixed cameras at outdoor events. Rapidly repositionable for evolving crowd dynamics, with zero noise disruption." },
    ],
    faq: [
      { question: "How does perch-and-stare work?", answer: "The B1 Guard lands on any surface, folds its wings, and enters low-power surveillance mode. Its thermal sensor continuously scans for motion. When a target is detected, it can either alert you or take off autonomously to follow." },
      { question: "What is the detection range?", answer: "The thermal sensor can designed to detect a person at up to 200m and a vehicle at up to 500m (design targets, subject to validation). Performance varies with environmental conditions." },
      { question: "How many units do I need for a property?", answer: "For a typical residential property (500-2000 sqm), 2-3 units provide comprehensive coverage. Each unit covers a 120\u00B0 field of view. A coverage planning tool is planned for future release." },
      { question: "Is it weatherproof?", answer: "The B1 Guard is rated IP54 (target) and can operate in light rain and wind up to 25 km/h. In severe weather, it automatically returns to its charging dock." },
      { question: "How does charging work?", answer: "The magnetic pogo dock charges the B1 Guard in approximately 30 minutes. The dock can be mounted on any flat surface and connects to standard USB-C power." },
    ],
  },
  inspect: {
    name: "B1 Inspect",
    tagline: "See What Eyes Can't",
    price: "TBD",
    availability: "Q4 2027",
    description:
      "Purpose-built for infrastructure inspection, the B1 Inspect uses thermal imaging to detect anomalies invisible to the naked eye. From micro-cracks in bridges to insulation failures in buildings.",
    features: [
      { icon: "\ud83c\udfd7", title: "Structural Analysis", description: "Thermal gradient mapping identifies delamination, moisture ingress, and stress fractures in concrete and steel structures." },
      { icon: "\ud83d\udcca", title: "Report Generation", description: "Automated inspection reports with geo-tagged thermal maps, anomaly classification, and severity scoring." },
      { icon: "\ud83c\udfaf", title: "Precision Navigation", description: "Waypoint-based autonomous flight paths ensure consistent, repeatable inspection coverage every time." },
    ],
    specs: [
      { label: "Weight", value: "70g" },
      { label: "Wingspan", value: "240mm (deployed)" },
      { label: "Propulsion", value: "PZT Bimorph + EDF 20mm" },
      { label: "Flight Endurance", value: "~56min hover / ~75min cruise" },
      { label: "Thermal Sensor", value: "High-resolution uncooled thermal" },
      { label: "Thermal Resolution", value: "640 \u00D7 480 @ 12\u00B5m" },
      { label: "Thermal Sensitivity", value: "Military-grade" },
      { label: "Temperature Range", value: "-40\u00B0C to +600\u00B0C" },
      { label: "Speed", value: "40 km/h cruise / 90 km/h dash" },
      { label: "Range", value: "2 km round-trip" },
      { label: "GPS Accuracy", value: "\u00B1 1.5m CEP" },
      { label: "Battery", value: "Ultra-light, high-density" },
      { label: "Charging", value: "Magnetic pogo dock" },
      { label: "Data Output", value: "RTSP stream + microSD" },
      { label: "Certifications", value: "Target: EASA C0 Open category" },
    ],
    useCases: [
      { title: "Bridge Inspection", description: "Fly under and around bridge structures to detect concrete delamination, rebar corrosion, and bearing deterioration without lane closures or scaffolding." },
      { title: "Solar Farm Audit", description: "Scan thousands of panels per hour, automatically detecting hot spots, cell failures, and junction box anomalies with centimeter-level geo-tagging." },
      { title: "Building Envelope", description: "Map thermal leaks in facades, identify moisture intrusion in flat roofs, and verify insulation integrity in new construction." },
    ],
    faq: [
      { question: "Can it detect water leaks?", answer: "Yes. Thermal imaging reveals temperature differentials caused by moisture. The B1 Inspect can identify wet areas in roofs, walls, and floors that are invisible to the eye." },
      { question: "What file formats does it export?", answer: "Thermal data is exported as radiometric TIFF (with temperature data per pixel), JPEG for visual overlay, and CSV for anomaly coordinates. Reports export as PDF." },
      { question: "Does it require a pilot license?", answer: "Under EASA C0 classification (pending), drones under 250g can be flown in the Open category without a license in most EU countries. Local regulations may vary." },
      { question: "How close can it fly to structures?", answer: "The B1 Inspect has proximity sensors that allow safe operation as close as 30cm from surfaces, ideal for detailed structural assessment." },
      { question: "Can it inspect in confined spaces?", answer: "Yes. At 70g with a 120mm wingspan, it can navigate through openings as small as 200mm, making it ideal for interior inspections of tanks, tunnels, and ducts." },
    ],
  },
  rescue: {
    name: "B1 Rescue",
    tagline: "Find. Mark. Save.",
    price: "TBD",
    availability: "Q4 2027",
    description:
      "When every second counts, the B1 Rescue deploys in under 10 seconds to locate survivors using thermal imaging. GPS-marks their position and guides rescue teams directly to them.",
    features: [
      { icon: "\ud83e\uddd1\u200d\ud83d\ude92", title: "Person Detection", description: "AI-powered thermal person detection works through smoke, dust, darkness, and light foliage. Classifies prone, standing, and moving targets." },
      { icon: "\ud83d\udccd", title: "GPS Marking", description: "One-tap GPS marking of survivor locations, shared in real-time with all rescue team members via encrypted mesh network." },
      { icon: "\u26a1", title: "Rapid Deploy", description: "Belt-pouch to airborne in under 10 seconds. No assembly, no calibration. Throw and fly." },
    ],
    specs: [
      { label: "Weight", value: "70g" },
      { label: "Wingspan", value: "240mm (deployed)" },
      { label: "Propulsion", value: "PZT Bimorph + EDF 20mm" },
      { label: "Flight Endurance", value: "~56min hover / ~75min cruise" },
      { label: "Deploy Time", value: "< 10 seconds" },
      { label: "Thermal Sensor", value: "High-resolution uncooled thermal" },
      { label: "Thermal Resolution", value: "640 \u00D7 480 @ 12\u00B5m" },
      { label: "Person Detection", value: "AI on-device, < 200ms" },
      { label: "Detection Range", value: "200m (design target)" },
      { label: "GPS Accuracy", value: "\u00B1 1.5m CEP" },
      { label: "Speed", value: "40 km/h cruise / 90 km/h dash" },
      { label: "Range", value: "2 km round-trip" },
      { label: "Comms", value: "BLE 6.0 + LoRa mesh" },
      { label: "Water Resistance", value: "IP54 (target)" },
      { label: "Operating Temp", value: "-10\u00B0C to +50\u00B0C" },
    ],
    useCases: [
      { title: "Earthquake Response", description: "Deploy multiple units over collapsed structures to rapidly identify heat signatures of trapped survivors, prioritizing rescue excavation efforts." },
      { title: "Wilderness Search", description: "Cover vast search areas silently, detecting lost hikers through forest canopy with thermal imaging that works day and night." },
      { title: "Flood Rescue", description: "Fly over flooded areas to locate stranded individuals on rooftops or in vehicles, marking positions for boat-based rescue teams." },
    ],
    faq: [
      { question: "Can it see through rubble?", answer: "Thermal imaging cannot penetrate solid materials, but it detects residual heat signatures on surfaces. In earthquake scenarios, body heat often conducts through thin rubble layers, making detection possible up to 30cm of loose debris." },
      { question: "How many can work together?", answer: "The platform is designed to support coordinated mesh operations, dividing a search area automatically and sharing findings in real-time. No central controller required." },
      { question: "Does it work in rain?", answer: "The B1 Rescue is IP54 (target) rated and operates in light to moderate rain. Heavy rain degrades thermal performance slightly but the unit remains flight-capable." },
      { question: "What happens when battery is low?", answer: "At 15% battery, the B1 Rescue enters return-to-operator mode automatically. It will mark its last known scan position so another unit can continue the search." },
      { question: "Is it approved for emergency services?", answer: "We are working with EU emergency services on certification. The B1 Rescue is designed to comply with EASA C0 regulations for sub-250g drones." },
    ],
  },
  agri: {
    name: "B1 Agri",
    tagline: "Precision from Above",
    price: "TBD",
    availability: "Q1 2028",
    description:
      "The most affordable B1 variant, optimized for agricultural monitoring. NDVI-capable thermal mapping helps farmers detect crop stress, irrigation issues, and pest damage before it spreads.",
    features: [
      { icon: "\ud83c\udf3f", title: "Crop Health Mapping", description: "Thermal NDVI analysis detects water stress, nutrient deficiency, and disease onset up to two weeks before visible symptoms appear." },
      { icon: "\ud83d\udcf1", title: "Farm Dashboard", description: "Cloud-based field maps with historical comparison, zone-level health scoring, and actionable recommendations." },
      { icon: "\ud83d\udd04", title: "Autonomous Patrol", description: "Define field boundaries once, then the B1 Agri flies optimized survey patterns automatically on a schedule you set." },
    ],
    specs: [
      { label: "Weight", value: "70g" },
      { label: "Wingspan", value: "240mm (deployed)" },
      { label: "Propulsion", value: "PZT Bimorph + EDF 20mm" },
      { label: "Flight Endurance", value: "~56min hover / ~75min cruise" },
      { label: "Survey Coverage", value: "10 ha per flight" },
      { label: "Thermal Sensor", value: "High-resolution uncooled thermal" },
      { label: "Thermal Resolution", value: "640 \u00D7 480 @ 12\u00B5m" },
      { label: "GSD @ 30m AGL", value: "5.4 cm/pixel" },
      { label: "Speed", value: "40 km/h cruise" },
      { label: "Range", value: "2 km round-trip" },
      { label: "Battery", value: "Ultra-light, high-density" },
      { label: "Charging", value: "Magnetic pogo dock (solar-compatible)" },
      { label: "Data Output", value: "GeoTIFF + CSV" },
      { label: "Noise @ 10m", value: "< 25 dB(A)" },
      
    ],
    useCases: [
      { title: "Vineyard Monitoring", description: "Weekly thermal surveys of vineyard blocks detect water stress and optimize irrigation scheduling, improving grape quality and helping optimize water usage." },
      { title: "Greenhouse Inspection", description: "Fly through greenhouse interiors to identify heating system failures, ventilation issues, and localized pest infestations with thermal contrast." },
      { title: "Livestock Monitoring", description: "Thermal detection of livestock in open range, counting animals and identifying individuals showing signs of illness through elevated body temperature." },
    ],
    faq: [
      { question: "How much area can it cover?", answer: "At cruise speed, the B1 Agri covers approximately 10 hectares per flight at 30m altitude. For larger farms, the magnetic pogo dock supports solar-powered recharging for fully autonomous daily surveys." },
      { question: "Does it replace satellite imagery?", answer: "It complements satellite data by providing much higher resolution (5.4 cm vs 10m per pixel) and on-demand timing regardless of cloud cover. Ideal for field-level decisions." },
      { question: "Can it detect specific crop diseases?", answer: "Thermal imaging detects temperature anomalies associated with stress, but specific disease identification requires integration with our cloud-based AI analysis platform (included in the first year)." },
      { question: "Is it safe around livestock?", answer: "At < 25 dB(A), the B1 Agri is quieter than ambient farm noise. Design targets zero disturbance to cattle, sheep, and poultry at 20m altitude." },
      { question: "What about pesticide spraying?", answer: "The B1 Agri is a monitoring platform, not a sprayer. At 70g it is a monitoring platform, not a carrier. It identifies where to spray, reducing chemical use through targeted application." },
    ],
  },
  cine: {
    name: "B1 Cine",
    tagline: "Silent Eye in the Sky",
    price: "TBD",
    availability: "Q1 2028",
    description:
      "Designed for wildlife filmmakers and documentary crews who need aerial footage without disturbing their subjects. Near-silent, thermal night vision, and cinematic flight modes.",
    features: [
      { icon: "\ud83c\udfac", title: "Cinematic Modes", description: "Pre-programmed flight paths including orbit, dolly, and reveal. Smooth stabilized footage with 3-axis EIS." },
      { icon: "\ud83e\udd89", title: "Wildlife Safe", description: "Inaudible to most wildlife at operating altitude. No rotor wash disturbs foliage or animals. Thermal for night shoots." },
      { icon: "\ud83d\udcf7", title: "Dual Imaging", description: "Switch between visible and thermal in-flight. Picture-in-picture mode overlays thermal on visible for dramatic effect." },
    ],
    specs: [
      { label: "Weight", value: "70g" },
      { label: "Wingspan", value: "240mm (deployed)" },
      { label: "Propulsion", value: "PZT Bimorph + EDF 20mm" },
      { label: "Flight Endurance", value: "~56min hover / ~75min cruise" },
      { label: "Thermal Sensor", value: "High-resolution uncooled thermal" },
      { label: "Thermal Resolution", value: "640 \u00D7 480 @ 12\u00B5m" },
      { label: "Video Output", value: "1080p RTSP stream" },
      { label: "Stabilization", value: "3-axis EIS" },
      { label: "Speed", value: "40 km/h cruise / 90 km/h dash" },
      { label: "Range", value: "2 km round-trip" },
      { label: "Noise @ 10m", value: "< 25 dB(A)" },
      { label: "Flight Modes", value: "Orbit, Dolly, Reveal, Follow" },
      { label: "Battery", value: "Ultra-light, high-density" },
      { label: "Charging", value: "Magnetic pogo dock" },
      { label: "Storage", value: "microSD (up to 256GB)" },
    ],
    useCases: [
      { title: "Wildlife Documentary", description: "Film nocturnal animals in their natural habitat without disturbance. The B1 Cine's silent flight and thermal imaging capture behavior never before seen on camera." },
      { title: "Night Landscape", description: "Create stunning thermal time-lapses of landscapes, revealing heat patterns in rivers, cities, and geological features invisible to conventional cameras." },
      { title: "Extreme Sports", description: "Follow athletes with smooth cinematic tracking at speeds up to 90 km/h. The B1 Cine's compact size means it can fly where traditional drones cannot." },
    ],
    faq: [
      { question: "What video quality can I expect?", answer: "The thermal sensor outputs high-resolution video at 60fps. The visible light camera streams 1080p. Both feeds can be recorded simultaneously to microSD with metadata overlay." },
      { question: "Can animals hear it?", answer: "At operating altitude (20m+), the B1 Cine is designed to produce minimal noise at operating altitude and well below the alert threshold of birds." },
      { question: "How does it handle wind?", answer: "The B1 Cine maintains stable flight in winds up to 20 km/h. Built-in wind compensation uses IMU data to smooth footage automatically. Above 25 km/h, it returns to operator." },
      { question: "Can I use it commercially?", answer: "Under EASA C0 (pending), sub-250g drones can be used commercially in the Open category in most EU countries. Check local regulations for specific filming permits that may be required." },
      { question: "What editing software supports the output?", answer: "Thermal TIFF sequences are compatible with DaVinci Resolve, Adobe Premiere Pro, and Final Cut Pro. A plugin for thermal color grading is planned and overlay effects." },
    ],
  },
};

const validVariants = ["guard", "inspect", "rescue", "agri", "cine"];

export function generateStaticParams() {
  const params: { locale: string; variant: string }[] = [];
  for (const locale of locales) {
    for (const variant of validVariants) {
      params.push({ locale, variant });
    }
  }
  return params;
}

export function generateMetadata({ params }: { params: { locale: string; variant: string } }): Metadata {
  const data = variantData[params.variant];
  if (!data) return { title: "Not Found" };
  return {
    title: `${data.name} \u2014 ${data.tagline} | SashaTech`,
    description: data.description,
  };
}

export default function ProductPage({ params }: { params: { locale: string; variant: string } }) {
  const data = variantData[params.variant];
  if (!data) notFound();

  const prefix = `/${params.locale}`;

  return (
    <>
      <HeroSection
        badge={data.availability}
        title={`${data.name} \u2014 ${data.tagline}`}
        subtitle={`\u20AC${data.price} | ${data.availability}`}
        description={data.description}
        ctaText={`Learn about ${data.name} \u2192`}
        ctaHref={`${prefix}/contact`}
        secondaryCta={{ text: "View Specs", href: "#specs" }}
      />

      {/* Product Image Placeholder */}
      <section className="section-container py-8">
        <div className="aspect-[2/1] bg-navy-light rounded-2xl border border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-muted text-sm">{data.name} Product Image</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-container py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Key Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      {/* Specs */}
      <section id="specs" className="section-container py-16">
        <div className="max-w-2xl mx-auto">
          <SpecsTable specs={data.specs} title="Technical Specifications" />
        </div>
      </section>

      {/* Use Cases */}
      <section className="section-container py-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data.useCases.map((uc) => (
            <div key={uc.title} className="glass-card">
              <div className="aspect-[3/2] bg-navy rounded-xl mb-4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent" />
              </div>
              <h3 className="font-semibold mb-2">{uc.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{uc.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-container py-16">
        <div className="max-w-2xl mx-auto">
          <FAQAccordion items={data.faq} title="Frequently Asked Questions" />
        </div>
      </section>

      {/* CTA */}
      <section className="section-container py-20">
        <div className="glass-card text-center py-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Ready for the {data.name}?
          </h2>
          <p className="text-muted mb-8 max-w-md mx-auto">
            Contact us to learn more about availability.
          </p>
          <Link href={`${prefix}/contact`} className="btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
