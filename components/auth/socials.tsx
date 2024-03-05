"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaGitlab, FaApple } from "react-icons/fa";
import { Button } from "../ui/button";

interface SocialsProps {
  google?: boolean;
  github?: boolean;
  gitlab?: boolean;
  apple?: boolean;
}

export const Socials = ({ google, github, gitlab, apple }: SocialsProps) => {
  return (
    <div className="flex items-center w-full gap-x-2">
      {google && (
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={() => {}}
        >
          <FcGoogle className="h-5 w-5" />
        </Button>
      )}
      {github && (
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={() => {}}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      )}
      {gitlab && (
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={() => {}}
        >
          <FaGitlab className="h-5 w-5" />
        </Button>
      )}
      {apple && (
        <Button
          size="lg"
          variant="outline"
          className="w-full"
          onClick={() => {}}
        >
          <FaApple className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};
