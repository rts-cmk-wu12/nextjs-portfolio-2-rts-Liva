import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata = {
  title: "Contact",
  description: "The contact page of Amina's portfolio.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="my-10 max-w-[70vw] mx-auto">
        <h1 className="text-4xl text-center font-extrabold capitalize">get in touch</h1>
        <p className="text-sm text-center text-neutral-500 mt-2">Thanks for visiting my portfolio!</p>
        <p className="text-sm text-center text-neutral-500 mt-2">If you're interested in working with someone who combines creative thinking with a strong focus on user experience and accessible design, feel free to get in touch.</p>
        <p className="text-sm text-center text-neutral-500 mt-2">I'm always happy to connect regarding potential collaborations, internships, or freelance work.</p>
        <form className="flex flex-col gap-4 max-w-sm mx-auto mt-8">
          <div>
            <label htmlFor="email" className="block text-xs font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Please enter your email"
              className="bg-white placeholder-gray-500 px-3 py-2 w-full rounded text-xs mt-1" />
          </div>
          <div>
            <label htmlFor="mobile" className="block text-xs font-semibold">Mobile</label>
            <input
              type="number"
              id="mobile"
              name="mobile"
              placeholder="Enter mobile"
              className="bg-white placeholder-gray-500 px-3 py-2 w-full rounded text-xs mt-1" />
          </div>
          <div>
            <label htmlFor="message" className="block text-xs font-semibold">Message</label>
            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Enter your message"
              className="bg-white placeholder-gray-500 px-3 py-2 w-full rounded text-xs mt-1 resize-none" />
          </div>
          <button type="submit" className="font-bold bg-green-700 px-13 py-3 rounded border border-lime-600 text-sm">Submit &#62;</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
