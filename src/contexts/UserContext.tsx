import { createContext, SetStateAction, useState } from 'react';

export interface IChildrenProps {
  children: React.ReactNode
}

export interface IUserContextProps {
  user: string,
  setUserInfo: React.Dispatch<SetStateAction<string>>
}

 

export const UserContext = createContext<IUserContextProps>({} as IUserContextProps);

// export const UserContextProvider = ({children}: IChildrenProps) => {
//   const [userInfo, setUserInfo] = useState(initialState)

//   return(
//     <UserContext.Provider value={{userInfo, setUserInfo}}>
//       {children}
//     </UserContext.Provider>
//   )
// };
