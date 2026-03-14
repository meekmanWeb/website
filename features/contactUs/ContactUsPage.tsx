"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { Bell, Mail, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import { ContactFormType, contactSchema } from "./validation";
import emailjs from "@emailjs/browser";
import { publickKey, serviceId, templateId } from "@/config/emailJs";
import toast from "react-hot-toast";
const ContactUsPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
  });
  const getTodayDate = () => {
    const today = new Date();

    return today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };
  const onSubmit = async (data: ContactFormType) => {
    try {
      await emailjs.send(
        serviceId!,
        templateId!,
        {
          name: data.schoolName,
          time: getTodayDate(),
          message: `${data.message} <br/><br/><br/><br/>  School Address: ${data.address} <br/><br/><br/><br/>  Contact Number:${data.phone}`,
          title: "Important Message from Website",
          email: data.email,
        },
        publickKey!,
      );

      toast.success("Message sent successfully");
      reset();
    } catch (error) {
      toast.error("email failed, contact us at 07066190321");
    }
  };
  return (
    <main className="mx-auto max-w-4xl w-full mt-10">
      <section className="my-10 flex-col md:flex-row flex justify-center p-4 gap-4">
        <article className="w-full md:w-1/2 md:mt-6">
          <h1 className=" font-bold text-lg text-primary">Contact Us</h1>
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
        <form
          className=" shadow bg-[#ebebeb50] w-full md:w-1/2 space-y-6 p-6 rounded-lg "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label className="block text-sm font-medium text-primary">
              School or Business Name
            </label>

            <input
              {...register("schoolName")}
              className="mt-1 block w-full border bg-white border-gray-200 rounded-md p-2"
            />

            {errors.schoolName && (
              <p className="text-red-500 text-xs">
                {errors.schoolName.message}
              </p>
            )}
          </div>

          {/* Address */}
          <div>
            <label className="block text-sm font-medium text-primary">
              Address
            </label>

            <input
              {...register("address")}
              className="mt-1 block w-full border bg-white border-gray-200 rounded-md p-2"
            />

            {errors.address && (
              <p className="text-red-500 text-xs">{errors.address.message}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-primary">
              Phone Number
            </label>

            <input
              {...register("phone")}
              className="mt-1 block w-full border bg-white border-gray-200 rounded-md p-2"
            />

            {errors.phone && (
              <p className="text-red-500 text-xs">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-primary">
              Email Address
            </label>

            <input
              {...register("email")}
              className="mt-1 block w-full border bg-white border-gray-200 rounded-md p-2"
            />

            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-primary">
              Message
            </label>

            <textarea
              rows={5}
              {...register("message")}
              className="mt-1 block w-full border bg-white border-gray-200 rounded-md p-2 resize-none"
            />

            {errors.message && (
              <p className="text-red-500 text-xs">{errors.message.message}</p>
            )}
          </div>

          <button
            disabled={isSubmitting}
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactUsPage;
