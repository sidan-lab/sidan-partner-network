# Sidan Partner Network

## To add yourself to our partner network, please submit a pull request with the following information:

```json
{
  partners: {
    name: string /* Name of the partner */;
    title: string /* Title of the partner */;
    photo: string /* URL of the partner's photo */;
  }[];
  country: string;
  coordinates: [number, number] /* [longitude, latitude] */;
  position?:
    | "up"
    | "down" /* For whether the text shows above the marker or below */;
  link?: string /* Link to social media */;
  city?: string;
}
```