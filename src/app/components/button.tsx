// src/app/components/Button.tsx

import Link from "next/link"

const Button = ({ children, href }: { children: React.ReactNode, href: string }) => (
    <Link href={href} passHref>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md">
        {children}
      </button>
    </Link>
  );
  
  export default Button;
  