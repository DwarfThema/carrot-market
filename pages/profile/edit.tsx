import type { NextPage } from "next";
import Button from "@components/button";
import Input from "@components/input";
import Layout from "@components/layout";
import useUser from "@libs/client/useUser";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import useMutation from "@libs/client/useMutation";

interface EditProfileForm {
  email?: string;
  phone?: string;
  name?: string;
  formErrors?: string;
}

interface EditProfileResponse {
  ok: boolean;
  error?: string;
}

const EditProfile: NextPage = () => {
  const { user } = useUser();
  //모든 페이지에 이걸 넣어서 페이지를 보호해야한다.
  const {
    register,
    setValue,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (user?.email) setValue("email", user.email);
    if (user?.phone) setValue("phone", user.phone);
    if (user?.name) setValue("name", user.name);
  }, [user, setValue]);

  const [editProfile, { data, loading }] =
    useMutation<EditProfileResponse>(`/api/users/me`);

  useEffect(() => {
    if (data && !data.ok && data.error) {
      setError("formErrors", { message: data?.error });
    }
  }, [data, setError]);

  const onValid = ({ email, phone, name }: EditProfileForm) => {
    if (loading) return;

    if (email === "" && phone === "" && name === "") {
      return setError("formErrors", {
        message: "이메일이나 휴대번호를 반드시 입력해야 합니다.",
      });
    }

    editProfile({
      email,
      phone,
      name,
    });
  };

  return (
    <Layout canGoBack title="프로필 수정">
      <form onSubmit={handleSubmit(onValid)} className="py-10 px-4 space-y-4">
        <div className="flex items-center space-x-3">
          <div className="w-14 h-14 rounded-full bg-slate-500" />
          <label
            htmlFor="picture"
            className="cursor-pointer py-2 px-3 border hover:bg-gray-50 border-gray-300 rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 text-gray-700"
          >
            변경
            <input
              id="picture"
              type="file"
              className="hidden"
              accept="image/*"
            />
          </label>
        </div>
        <Input
          register={register("name")}
          label="닉네임 변경"
          name="name"
          type="text"
        />
        <Input
          register={register("email")}
          label="이메일 주소"
          name="email"
          type="email"
        />
        <Input
          register={register("phone")}
          label="휴대번호"
          name="phone"
          type="number"
          kind="phone"
        />
        {errors.formErrors ? (
          <span className="my-2 text-red-500 font-medium block text-center">
            {errors.formErrors.message}
          </span>
        ) : null}
        <Button text={loading ? "로딩중 입니다.." : "수정 완료"} />
      </form>
    </Layout>
  );
};

export default EditProfile;
