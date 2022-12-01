export const HOME_CONTENT = `
query {
    pageCollection (where: { slug: "home" }, limit: 1) {
      items {
        title
        slug
        componentsCollection {
          items {
            ... on ComponentHeroCarousel {
              __typename
              title
              description {
                json
              }
              carouselImagesCollection {
                items {
                  title
                  url
                  width
                  height
                }
              }
            }
          }
        }
      }
    }
}
`;
