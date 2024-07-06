import { doc, getDoc } from "firebase/firestore";
import { create } from "zustand";
import { db } from "./firebase";
import { useUserStore } from "./userStore";

export const useChatStore = create((set) => ({
 chatId: null,
 user: null,
 isCurrentUserBlocked: false,
 isReceiverBlocked: false,
 changeChat: (chatId, user) => {
  const currentUser = useUserStore.getState().currentUser

  // Check if curren user is blocked

  if (user.blocked.includes(currentUser.uid)) {
   return set({
    chatId,
    user: null,
    isCurrentUserBlocked: true,
    isReceiverBlocked: false,
   });
  }

  //check if receiver is blocked

  else if (user.blocked.includes(user.uid)) {
   return set({
    chatId,
    user: user,
    isCurrentUserBlocked: false,
    isReceiverBlocked: true,
   });
  } else {

   return set({
    chatId,
    user,
    isCurrentUserBlocked: false,
    isReceiverBlocked: false,
   });
  }
 },
  
  changeBlock: () => {
   set((state) => ({ ...state, isReceiverBlocked: !state.isReceiverBlocked }));
  },
}));
