import { createRootRoute, Outlet } from '@tanstack/react-router';
import {useLayoutEffect} from 'react';
import * as FirebaseAuthService from '../authService/FirebaseAuthService.ts';
import { useAuthStore } from '../store/useAuthStore.ts';

export const Route = createRootRoute({
  component: RootComponent
});

function RootComponent() {
  const setLoginUser = useAuthStore((state) => state.setLoginUser);

  useLayoutEffect(() => {
    FirebaseAuthService.onAuthStateChanged(setLoginUser);
  }, [setLoginUser]);

  return <Outlet />;
}
