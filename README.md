# SIDAN Lab Partner Network

This is a public repository to record all SIDAN Lab's partners. We will use this static information to render creative components around SIDAN Lab's work.

<img width="1385" alt="image" src="https://github.com/user-attachments/assets/c2120690-8a06-46d6-bd45-b0e1c3148640">


## To add yourself to our partner network, please submit a pull request with the following information:

```typescript
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
    | "down" 
    | 'left'
    | 'right'
    /* For whether the text shows above the marker or below, default up */;
  link?: string /* Link to social media */;
  city?: string;
}
```
