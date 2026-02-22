"use client";

import { db } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "sonner";
// ================= VALIDATION =================
const contactSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  service: z.string().min(1, "Select a service"),
  budget: z
    .string()
    .optional()
    .refine((val) => !val || /^\d+$/.test(val), {
      message: "Budget must be a number",
    }),
  idea: z.string().min(10).max(500),
});

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      service: "",
      budget: "",
      idea: "",
    },
  });

  const serviceValue = watch("service");

  // ================= SUBMIT =================
  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, "contacts"), {
        ...data,
        budget: data.budget || null,
        createdAt: serverTimestamp(),
      });

      toast.success("Message sent successfully 🚀");
      reset();
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong ❌");
    }
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row justify-center items-center px-6 md:px-20 py-20 bg-black text-white gap-10">
      {/* LEFT IMAGE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 flex justify-center items-center"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <Image
            src="/picprofessional.png"
            alt="Muhammad Zubair"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
          />
        </motion.div>
      </motion.div>

      {/* RIGHT FORM */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full md:w-1/2 bg-white/5 p-10 rounded-2xl shadow-lg border border-white/10"
      >
        <h2 className="text-3xl font-bold mb-6">Let’s Collaborate</h2>
        <p className="text-gray-300 mb-6">
          Share your project idea and let's build something impactful together!
        </p>

        <form className="flex flex-col gap-6" onSubmit={handleSubmit(onSubmit)}>
          {/* NAME */}
          <div>
            <Label>Name</Label>
            <Input {...register("name")} placeholder="Your Name" />
            {errors.name && (
              <p className="text-red-400 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <Label>Email</Label>
            <Input {...register("email")} placeholder="Your Email" />
            {errors.email && (
              <p className="text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* SERVICE (FIXED) */}
          <div>
            <Label>Service Needed</Label>

            <Controller
              name="service"
              control={control}
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Frontend Development">
                      Frontend Development (React / Next.js)
                    </SelectItem>

                    <SelectItem value="Full Stack Development">
                      Full Stack Development
                    </SelectItem>

                    <SelectItem value="Firebase Backend">
                      Firebase Backend Integration
                    </SelectItem>

                    <SelectItem value="API Integration">
                      REST API Integration
                    </SelectItem>

                    <SelectItem value="Chatbot Development">
                      Chatbot Development (ManyChat)
                    </SelectItem>

                    <SelectItem value="Portfolio Website">
                      Portfolio Website
                    </SelectItem>

                    <SelectItem value="Admin Dashboard">
                      Admin Dashboard
                    </SelectItem>

                    <SelectItem value="Excel Automation">
                      Excel Automation / Reports
                    </SelectItem>

                    <SelectItem value="Bug Fixing">
                      Bug Fixing / Project Optimization
                    </SelectItem>

                    <SelectItem value="Other">Other</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />

            {errors.service && (
              <p className="text-red-400 text-sm">{errors.service.message}</p>
            )}
          </div>

          {/* BUDGET */}
          {serviceValue && serviceValue !== "Other" && (
            <div>
              <Label>Budget</Label>
              <Input {...register("budget")} placeholder="Enter your budget" />
              {errors.budget && (
                <p className="text-red-400 text-sm">{errors.budget.message}</p>
              )}
            </div>
          )}

          {/* IDEA */}
          <div>
            <Label>Project Idea</Label>
            <Textarea
              {...register("idea")}
              placeholder="Describe your project..."
            />
            {errors.idea && (
              <p className="text-red-400 text-sm">{errors.idea.message}</p>
            )}
          </div>

          {/* BUTTON */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 hover:bg-blue-700"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>

          <p className="mt-6 text-sm text-gray-400">
            Or go back{" "}
            <Link href="/" className="underline text-blue-400">
              Home
            </Link>
          </p>
        </form>
      </motion.div>
    </section>
  );
}
