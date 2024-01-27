import React from "react";

const map = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-homepage-background bg-cover bg-no-repeat p-24 text-white">
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12181.283709653006!2d-111.65414825!3d40.2463985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x874d90bb13517f57%3A0x2466f47e7c66c579!2sBrigham%20Young%20University%20Museum%20of%20Art%20(MOA)!5e0!3m2!1sen!2sus!4v1706393800166!5m2!1sen!2sus"
          width="800"
          height="600"
          style={{ border: "0" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default map;
