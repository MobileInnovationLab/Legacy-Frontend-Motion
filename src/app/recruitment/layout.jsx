import Footer from "@/core/components/footer";
import "@/core/styles/tailwind.scss";

export default function RecruitmentLayout({ children }) {
  return (
    <div className="bg-[#FCF6F6]">
      {children}

      <Footer />
    </div>
  );
}
