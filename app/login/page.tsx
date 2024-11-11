import Image from "next/image";
import { Button } from "../_components/ui/button";
import { LogInIcon } from "lucide-react";

const LoginPage = () => {
  return (
    <div className="grid h-full grid-cols-2">
      {/* esquerda */}
      <div className="mx-auto flex h-full flex-col justify-center p-8 max-w-[550px]">
        <Image
          src="/logo.svg"
          alt="MAInvesting"
          width={173}
          height={39}
          className="mb-8"
        />
        <h1 className="text-4xl font-bold mb-3">Bem-vindo</h1>
        <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          eaque dicta, nulla officiis voluptatum modi sint illo deleniti!
          Dolores sed nisi deleniti dolor saepe deserunt enim aliquam quasi
          asperiores facilis.
        </p>
        <Button variant="outline">
          <LogInIcon className="mr-2"/>
          Fazer o login ou criar conta
        </Button>
      </div>
      {/* direita */}
      <div className="relative h-full w-full">
        <Image
          src="/login.png"
          alt="Faça o login"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default LoginPage;
