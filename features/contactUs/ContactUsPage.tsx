import { Bell, Mail, Phone } from "lucide-react";

const ContactUsPage = () => {
  return (
    <main className="mx-auto max-w-4xl w-full mt-10">
      <section className="my-10 md:flex justify-center  gap-4">
        <article className="w-full md:w-1/2 md:mt-6">
          <h1 className=" font-bold md:text-lg text-primary">Contact Us</h1>
          <p>We are a message away</p>
          <div className="mt-6 space-y-5">
            <article className="flex gap-4">
              <Phone className="mt-1" />
              <div>
                <h3 className="text-primary font-semibold">Phone</h3>
                <p className="text-sm">07066190321</p>
                <p className="text-sm">08038636871</p>
                <p className="text-sm">08064229573</p>
              </div>
            </article>
            <article className="flex gap-4">
              <Mail className="mt-1" />
              <div>
                <h3 className="text-primary font-semibold">Email</h3>
                <p className="text-sm">meekman@meekman.org</p>
                <p className="text-sm">support@meekman.org</p>
                <p className="text-sm">meekmanpubzeal@gmail.com</p>
              </div>
            </article>
            <article className="flex items-center gap-4">
              <Bell className="mt-1" />
              <div>
                <h3 className="text-primary font-semibold">Address</h3>
                <p className="text-sm">
                  <strong className="text-secondary">Head Office: </strong>
                  7, Kogi Layout,Off Ogunfayo Crescent Ashi, Ibadan.
                </p>
                <p className="text-sm">
                  <strong className="text-secondary">Ibadan Branch: </strong>
                  1, Olororo House, Olororo Bus Stop, Ojoo, Ibadan.
                </p>
              </div>
            </article>
          </div>
        </article>
        <form className=" shadow bg-[#ebebeb] w-full md:w-1/2 space-y-6 p-6 rounded-lg ">
          <div>
            <label
              htmlFor="schoolName"
              className="block text-sm font-medium text-gray-700"
            >
              School or Business Name
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 resize-none"
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default ContactUsPage;
