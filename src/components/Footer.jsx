import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SendHorizontal, Github, Linkedin, Mail, Twitter, MessageSquare } from "lucide-react";
import Resume from "../assets/RohitMangale.pdf"
const phone = import.meta.env.VITE_WHATSAPP_NUMBER;
const message = encodeURIComponent("Hi! I want to start a conversation.");  
const whatsappUrl = `https://web.whatsapp.com/${phone}?text=${message}`;


const socialLinks = [
  { icon: Github, href: "https://github.com/RohitMangale", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rohitmangale/" , label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:rohitmangale010@gmail.com", label: "Email" },
];

function ContactSection() {
  return (
    <section className="py-10 px-4 min-h-screen flex items-end justify-center w-full">
      <div className="container mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
              <h2 className=" headingText">
              <span className=" headingSpan">
                Let's Build</span>  Something Amazing
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Got a project? Let's break the internet together. I'm always excited to collaborate on innovative ideas.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<Button
  size="lg"
  className="bg-gradient-to-r from-blue-600 cursor-pointer to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 shadow-[0_0_15px_rgba(37,99,235,0.5)] hover:shadow-[0_0_25px_rgba(37,99,235,0.8)]"
  onClick={() => window.open(whatsappUrl, '_blank')}
>
  <SendHorizontal className="mr-2 h-5 w-5" />
  Start a Conversation
</Button>


<a href={Resume} download>
  <Button
    variant="outline"
    size="lg"
    className="border-gray-600 bg-black cursor-pointer text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-6 text-lg rounded-md transition-all duration-300"
  >
    Download Resume
  </Button>
</a>

          </div>

          <div className="flex justify-center space-x-6 pt-8 mb-20 ">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                // rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2, scale: 1.1 }}
                className="p-3 bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-400 hover:text-white hover:border-blue-500/50 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="h-6 w-6" />
              </motion.a>
            ))}
          </div>

          <div className="pt-8  border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} • Built with code, caffeine, and a lot of passion
            </p>
          </div>
        </motion.div>

        
      </div>
    </section>
  );
}

export default ContactSection;
