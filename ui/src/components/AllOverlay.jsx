import React from "react";
import AuthOverlay from "./AuthOverlay";
import ClientOnly from "./ClientOnly";

export default function AllOverlays() {
  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);

  return (
    <>
      <ClientOnly>
        {isLoginOpen ? <AuthOverlay setIsLoginOpen={setIsLoginOpen} /> : null}
      </ClientOnly>
    </>
  );
}