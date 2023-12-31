// para todas as fotos
interface MediaAttributes {
  src_mobile?:string
  src: string;
  alt: string;
}

//extendendo para midias
export interface Media extends MediaAttributes {}


export interface Header {
  logo: {
    src: string;
    alt: string;
  };

  navigation: Array<{
    label: string;
    url: string;
  }>;
}

export interface Document{
  src: string
  label: string
}

export interface Saudacoes {
  title: string;
  sub_title: string;
  about_me: string;
  photo: Media;
  photo_mobile: Media;
}

export interface Portfolio {
  photo:Media
  projects: Array<{
    title: string;
    design:{
      by: string,
      property: string,
      url: string
    },
    url: string;
    photo: Media;
    techs: Media[];
  }>;
}

export interface Techs {
  title: string;
  photo: Media
  logo: Media[];
}

export interface Novidades {
  text: string;
  photo: Media;
}

export interface Contato {
  text_button: string;
  title: string;
}

export interface Footer {
  icon: Array<{
    link: string
    src: string;
    alt: string;
  }>;

  logo: {
    src: string;
    alt: string;
  };
  copyright: string;
}
