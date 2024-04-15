import { ReactNode } from 'react';

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>{children}</div>
      <h1>Painel de Administração</h1>
    </div>
  );
}
