import Head from "next/head";
import AppLayout from "../components/AppLayout";
import NicknameEditForms from "../components/NicknameEditForm";
import FollowList from "../components/FollowList";

const Profile = () => {
  const followerList = [{ nickname: "제로초" }, { nickname: "지관" }, { nickname: "컴퍼니" }];
  const followingList = [{ nickname: "제로초" }, { nickname: "지관" }, { nickname: "컴퍼니" }];

  return (
    <AppLayout>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <NicknameEditForms />
      <FollowList header="팔로잉 목록" data={followingList} />
      <FollowList header="팔로워 목록" data={followerList} />
    </AppLayout>
  );
};

export default Profile;
