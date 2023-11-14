"use client";

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import api from "@/core/api/api";

export default function useRecruitmentAnnouncementViewModel() {
  const router = useRouter();
  const formik = useFormik({
    validateOnChange: false,
    initialValues: {
      nim: "",
    },
    validationSchema: Yup.object().shape({
      nim: Yup.string().required("The nim field is required"),
    }),
    onSubmit: (values, { setSubmitting }) => {
      api
        .get(`/recruitation/check/${values.nim}`)
        .then((response) => {
          if (response.data.is_accepted == 1) {
            router.push("/recruitment/accepted");
          } else {
            router.push("/recruitment/declined");
          }
        })
        .catch((err) => {
          console.log("ERR", err.response);
        })
        .finally(() => setSubmitting(false));
    },
  });

  return {
    formik,
  };
}
