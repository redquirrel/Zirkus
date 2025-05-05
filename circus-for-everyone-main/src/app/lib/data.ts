export const navLinks = {
    about: {
      workshops: "/#workshops",
      about: "/about",
      kontakt: "#kontakt",
    },
    home: {
        workshops: "#workshops",
        about: "/about",
        kontakt: "#kontakt",
      }
  } as const;

export const aktuellws = [
    {
        none: "Im Moment biete ich keinen fortlaufenden Kurs an",
        name: "Workshop1",
        info: "some info on this workshop. Stay tuned.",
        image: "/workshop_kufa-12.jpg",
    },
  ] as const;
