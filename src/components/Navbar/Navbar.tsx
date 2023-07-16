import Image from 'next/image';
import { Button, Typography } from '@/shared/components';
import { cryptoLogo } from '@/assets/svg';

export const Navbar = () => (
  <nav className="flex justify-between items:center max-w-screen-2xl w-full mx-auto px-4 pt-4 md:px-8 md:pt-8 lg:px-16">
    <div className="flex items-center gap-4 md:gap-6 lg:gap-8">
      <div className="relative w-12	h-12  md:w-16 md:h-16 lg:w-20 lg:h-20">
        <Image src={cryptoLogo} fill alt="Crypto logo" />
      </div>
      <Typography
        as="h2"
        className="text-3xl md:text-4xl lg:text-6xl font-semibold"
      >
        Crypto
      </Typography>
    </div>
    <div>
      <Button type="button" variant="gold">
        Connect Wallet
      </Button>
    </div>
  </nav>
);
