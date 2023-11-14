"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import api from "@/core/api/api";

export const generationOptions = [
  { label: 2023, value: 2023 },
  { label: 2022, value: 2022 },
  { label: 2021, value: 2021 },
  { label: 2020, value: 2020 },
];

export const majorOptions = [
  {
    label: "S1 Teknik Telekomunikasi",
    value: "S1 Teknik Telekomunikasi",
  },
  {
    label: "S1 Teknik Elektro",
    value: "S1 Teknik Elektro",
  },
  {
    label: "S1 Smart Science and Technology",
    value: "S1 Smart Science and Technology",
  },
  {
    label: "S1 Computer Engineering",
    value: "S1 Computer Engineering",
  },
  {
    label: "S1 Teknik Biomedis",
    value: "S1 Teknik Biomedis",
  },
  {
    label: "S2 Teknik Elektro-Telekomunikasi",
    value: "S2 Teknik Elektro-Telekomunikasi",
  },
  {
    label: "S1 Teknik Industri",
    value: "S1 Teknik Industri",
  },
  {
    label: "S1 Sistem Informasi",
    value: "S1 Sistem Informasi",
  },
  {
    label: "S1 Teknik Logistik",
    value: "S1 Teknik Logistik",
  },
  {
    label: "S2 Teknik Industri",
    value: "S2 Teknik Industri",
  },
  {
    label: "S1 Informatika",
    value: "S1 Informatika",
  },
  {
    label: "S1 Teknologi Informasi",
    value: "S1 Teknologi Informasi",
  },
  {
    label: "S1 Rekayasa Perangkat Lunak",
    value: "S1 Rekayasa Perangkat Lunak",
  },
  {
    label: "S1 Data Sains",
    value: "S1 Data Sains",
  },
  {
    label: "S1 PJJ Informatika",
    value: "S1 PJJ Informatika",
  },
  {
    label: "S2 Informatika",
    value: "S2 Informatika",
  },
  {
    label: "S2 Cyber Security and Digital Forensic",
    value: "S2 Cyber Security and Digital Forensic",
  },
  {
    label: "S1 International ICT Business",
    value: "S1 International ICT Business",
  },
  {
    label: "S1 Manajemen Bisnis Telekomunikasi & Informatika",
    value: "S1 Manajemen Bisnis Telekomunikasi & Informatika (MBTI)",
  },
  {
    label: "S1 Akuntansi",
    value: "S1 Akuntansi",
  },
  {
    label: "S2 Manajemen",
    value: "S2 Manajemen",
  },
  {
    label: "S2 Manajemen PJJ",
    value: "S2 Manajemen PJJ",
  },
  {
    label: "S1 Administrasi Bisnis",
    value: "S1 Administrasi Bisnis",
  },
  {
    label: "S1 Ilmu Komunikasi",
    value: "S1 Ilmu Komunikasi",
  },
  {
    label: "S1 Digital Public Relation",
    value: "S1 Digital Public Relation",
  },
  {
    label: "S1 Desain Komunikasi Visual",
    value: "S1 Desain Komunikasi Visual",
  },
  {
    label: "S1 Product Innovation & Management",
    value: "S1 Product Innovation & Management",
  },
  {
    label: "S1 Desain Interior",
    value: "S1 Desain Interior",
  },
  {
    label: "S1 Kriya (Fashion and Textile Design)",
    value: "S1 Kriya",
  },
  {
    label: "S1 Creative Arts (Intermedia Visual Arts)",
    value: "S1 Creative Arts",
  },
  {
    label: "S2 Desain",
    value: "S2 Desain",
  },
  {
    label: "D3 Digital Connectivity",
    value: "D3 Digital Connectivity",
  },
  {
    label: "D3 Teknik Informatika",
    value: "D3 Teknik Informatika",
  },
  {
    label: "D3 Sistem Informasi",
    value: "D3 Sistem Informasi",
  },
  {
    label: "D3 Sistem Informasi Akuntansi",
    value: "D3 Sistem Informasi Akuntansi",
  },
  {
    label: "D3 Teknik Komputer",
    value: "D3 Teknik Komputer",
  },
  {
    label: "D3 Digital Marketing",
    value: "D3 Digital Marketing",
  },
  {
    label: "D3 Hospitality and Culinary Art",
    value: "D3 Hospitality and Culinary Art",
  },
  {
    label: "S1 Terapan Digital Creative Multimedia (DCM)",
    value: "S1 Terapan Digital Creative Multimedia",
  },
];

export const divisionOptions = [
  { value: "Digital Business", label: "Digital Business" },
  { value: "UI/UX Design", label: "UI/UX Design" },
  { value: "Mobile Programming", label: "Mobile Programming" },
];

export default function useRecruitmentRegisterViewModel() {
  const router = useRouter();
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      name: "",
      email: "",
      nim: "",
      motivaton_letter: "",
      cv: "",
      ksm: "",
      portfolio: "",
      major: "",
      generation: "",
      division: "",
      share_poster: "",
      whatsapp: "",
    },
    validationSchema: Yup.object().shape({
      name: Yup.string().required("The name field is required"),
      email: Yup.string()
        .email("Please input a valid email")
        .required("The email field is required")
        .matches(/^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@student.telkomuniversity.ac.id$/, "Telkom University Student's Email Required (ex. example@student.telkomuniversity.ac.id)."),
      nim: Yup.number().typeError("NIM must be a number").required("The nim field is required"),
      cv: Yup.string()
        .required("The cv link field is required")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please provide a valid URL."),
      portfolio: Yup.string()
        .required("The portfolio link field is required")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please provide a valid URL."),
      motivation_letter: Yup.string()
        .required("The motivation letter link field is required")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please provide a valid URL."),
      share_poster: Yup.string()
        .required("The share poster link field is required")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please provide a valid URL."),
      ksm: Yup.string()
        .required("The ksm link field is required")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please provide a valid URL."),
      major: Yup.string().required("The major link field is required"),
      generation: Yup.string().required("The generation letter field is required"),
      division: Yup.string().required("The division letter field is required"),
      whatsapp: Yup.string().required("The whatsapp letter field is required"),
      share_poster: Yup.string()
        .required("The screenshot post instagram letter field is required")
        .matches(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/, "Please provide a valid URL."),
    }),
    onSubmit: (values, { setSubmitting }) => {
      setSubmitting(true);

      api
        .post("/recruitation", values)
        .then((response) => {
          router.push("/recruitment/success");
        })
        .catch((err) => {
          console.log("ERR", err.response.data);
        })
        .finally(() => setSubmitting(false));
    },
  });

  return {
    formik,
  };
}
