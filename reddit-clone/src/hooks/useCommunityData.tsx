import { communityState } from "../atoms/communitiesAtom";
import React from "react";
import { useRecoilState } from "recoil";

const useCommunityData = () => {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    // is the user signed in?
  };

  const joinCommunity = () => {};

  const leaveCommunity = () => {};

  return {
    // data and functions
    communityStateValue,
    joinCommunity,
    leaveCommunity,
  };
};
export default useCommunityData;
