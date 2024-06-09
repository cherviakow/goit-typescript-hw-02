interface Picture{
    largeImageURL(largeImageURL: any): unknown;
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