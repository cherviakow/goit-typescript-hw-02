interface Picture{
    tags: string;
    largeImageURL: string;
    webformatURL: string | undefined;
    id: string;
  urls: {
    small: string;
    regular: string;
    thumb: string;
    small_s3: string;
    raw: string;
    full: string;
  };
  description: string;
}

interface Image {
    urls: {
      regular: string;
    };
    description: string;
  }