export type RootStackParamList ={
    landing:undefined,
    signup:undefined,
    signin:undefined,
    "reset-password":undefined,
}

declare global {
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
}