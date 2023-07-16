export interface IntDetails {
  desc: string;
  title: {
    modHeader: string;
    int: string;
  };
}

export interface FootLinks {
  icon: JSX.Element;
  link: string;
}

export interface AboutDetails {
  desc: string;
  title: {
    abt: string;
    modHeader: string;
  };
}

export interface HeroDetails {
  title: {
    role: string;
    name: string;
    btn1: string;
    btn2: string;
    site: string;
  };
  link: {
    img: string;
    linkedIn: string;
    email: string;
    site: string;
  };
  alt: string;
}


