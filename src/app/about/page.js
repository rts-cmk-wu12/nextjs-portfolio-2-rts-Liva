import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "About",
  description: "The about page of Amina's portfolio.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="my-10 max-w-[70vw] mx-auto">
        <h1 className="text-4xl text-center font-extrabold">About me</h1>
        <p className="text-sm text-center mt-3">Hi! I'm Amina, a web development student with a passion for creating beautiful and user-centered websites.
          I'm especially interested in front-end design and accessibility—making sure websites are inclusive, responsive, and easy to use for everyone.
          I enjoy working with HTML, CSS, and JavaScript, and I've been exploring tools like Figma, Adobe XD, and Webflow to push my design ideas further.</p>
        <p className="text-sm text-center mt-3">For me, good web design is about storytelling.
          Whether it's a portfolio, a product page, or a blog, I believe every site should tell a story clearly and visually.
          I'm fascinated by the psychology of user experience, and I often look at apps like Notion, Duolingo, or even the design choices in Netflix to see how others solve UX problems creatively.</p>
        <p className="text-sm text-center mt-3">In my free time, I love drawing on my iPad (I use Procreate), reading graphic novels, and exploring languages and cultures through platforms like Duolingo and YouTube.
          I also have a soft spot for cozy games like <span className="italic">Stardew Valley</span> and <span className="italic">Spiritfarer</span>, which inspire me with their attention to detail and design.</p>
        <p className="text-sm text-center mt-3">I see web development as a space where technology meets empathy—and that's exactly where I want to be.
          I'm excited to keep learning, build meaningful projects, and grow in a direction where creativity and purpose go hand in hand.</p>
      </main>
      <Footer />
    </>
  );
}
