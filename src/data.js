// import bedroomimg1 from "./images/bedroomimg1.jpg";
// import bedroomimg2 from "./images/bedroomimg2.jpg";
// import hallwayimg1 from "./images/hallwayimg1.jpg";
// import hallwayimg2 from "./images/hallwayimg2.jpg";
// import livingimg1 from "./images/room-1.jpg";
// import livingimg2 from "./images/room-2.jpg";
// import livingimg3 from "./images/room-3.jpg";
// import livingimg4 from "./images/room-4.jpg";
// import diningimg1 from "./images/room-5.jpg";
// import diningimg2 from "./images/room-6.jpg";
// import babyimg1 from "./images/babyimg1";
// import babyimg2 from "./images/babyimg3";
// import babyimg3 from "./images/babyimg3";
// import babyimg4 from "./images/babyimg4";
// import officeimg1 from "./images/officeimg1.jpg";
// import officeimg2 from "./images/officeimg2.jpg";
// import officeimg3 from "./images/officeimg3.jpg";
// import officeimg4 from "./images/officeimg4.jpg";
// import treeofficeimg1 from "./images/treeofficeimg1.jpg";
// import treeofficeimg2 from "./images/treeofficeimg2.jpg";
// import treeofficeimg3 from "./images/treeofficeimg3.jpg";
// import treeofficeimg4 from "./images/treeofficeimg4.jpg";
// import treeofficeimg5 from "./images/treeofficeimg5.jpg";
// import treeofficeimg6 from "./images/treeofficeimg6.jpg";
// import banisterimg1 from "./images/banisterimg1.jpg";
// import banisterimg2 from "./images/banisterimg2.jpg";
// import frontdeskimg1 from "./images/frontdeskimg1.jpg";
// import frontdeskimg2 from "./images/frontdeskimg2.jpg";
// import frontdeskimg3 from "./images/frontdeskimg3.jpg";
// import fireplaceimg1 from "./images/fireplaceimg1.jpg";
// import bathimg1 from "./images/bathimg1.jpg";
// import bathimg2 from "./images/bathimg2.jpg";
// import treehomeimg5 from "./images/treehomeimg5.jpg";
// import treehomeimg6 from "./images/treehomeimg6.jpg";
// import treehomeimg7 from "./images/treehomeimg5.jpg";
// import treehomeimg8 from "./images/treehomeimg6.jpg";
// import christmashomefull from "./images/christmashomefull.jpg";



export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "bedroom",
      slug: "bedroom",
      type: "home",
      featured: false,
      description:"TBD",
      images: [
        {
          fields: {
            file: {
              url: bedroomimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: bedroomimg2
            }
          }
        },
        
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "entry-hallway",
      slug: "entry-hallway",
      type: "home",
      featured: false,
      images: [
        {
          fields: {
            file: {
              url: hallwayimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: hallwayimg2
            }
          }
        },
      ]
    }
  },
   {
    sys: {
      id: "3"
    },
    fields: {
      name: "living-room",
      slug: "living-room",
      type: "home",
      featured: false,
      images: [
        {
          fields: {
            file: {
              url: livingimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: livingimg2
            }
          }
        },
        {
          fields: {
            file: {
              url: livingimg3
            }
          }
        },
        {
          fields: {
            file: {
              url: livingimg4
            }
          }
        },
      ]
    }
  },
   {
    sys: {
      id: "4"
    },
    fields: {
      name: "dining",
      slug: "dining",
      type: "home",
      featured: true,
      images: [
        {
          fields: {
            file: {
              url: diningimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: diningimg2
            }
          }
        },
      ]
    }
  },
   {
    sys: {
      id: "5"
    },
    fields: {
      name: "baby-room",
      slug: "baby-room",
      type: "home",
      featured: true,
      images: [
        {
          fields: {
            file: {
              url: babyimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: babyimg2
            }
          }
        },
        {
          fields: {
            file: {
              url: babyimg3
            }
          }
        },
        {
          fields: {
            file: {
              url: babyimg4
            }
          }
        },
      ]
    }
  },
   {
    sys: {
      id: "6"
    },
    fields: {
      name: "bath",
      slug: "bath",
      type: "home",
      featured: false,
      images: [
        {
          fields: {
            file: {
              url: bathimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: bathimg2
            }
          }
        },
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "office",
      slug: "office",
      type: "home" || "office",
      images: [
        {
          fields: {
            file: {
              url: officeimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: officeimg2
            }
          }
        },
        {
          fields: {
            file: {
              url: officeimg3
            }
          }
        },
        {
          fields: {
            file: {
              url: officeimg4
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "tree",
      slug: "christmas-tree",
      type: "seasonal" && "home" || "seasonal" && "office" || "seasonal",
      images: [
        {
          fields: {
            file: {
              url: treeofficeimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: treeofficeimg2
            }
          }
        },
        {
          fields: {
            file: {
              url: treeofficeimg3
            }
          }
        },
        {
          fields: {
            file: {
              url: treeofficeimg4
            }
          }
        },
        {
          fields: {
            file: {
              url: treehomeimg5
            }
          }
        },
        {
          fields: {
            file: {
              url: treehomeimg6
            }
          }
        },
        {
          fields: {
            file: {
              url: christmashomefull
            }
          }
        },
        {
          fields: {
            file: {
              url: treehomeimg7
            }
          }
        },
        {
          fields: {
            file: {
              url: treehomeimg8
            }
          }
        },
      ]
    }
  },
   {
    sys: {
      id: "9"
    },
    fields: {
      name: "banister",
      slug: "christmas-banister",
      type: "seasonal" && "home" || "home" || "seasonal",
      images: [
        {
          fields: {
            file: {
              url: banisterimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: banisterimg2
            }
          }
        },
      ]
    }
  },
 {
    sys: {
      id: "10"
    },
    fields: {
      name: "frontdesk",
      slug: "christmas-frontdesk",
      type: "seasonal" && "office" || "office" || "seasonal",
      images: [
        {
          fields: {
            file: {
              url: frontdeskimg1
            }
          }
        },
        {
          fields: {
            file: {
              url: frontdeskimg2
            }
          }
        },
        {
          fields: {
            file: {
              url: frontdeskimg3
            }
          }
        },        
      ]
    }
  },
  {
    sys: {
      id: "11"
    },
    fields: {
      name: "fireplace",
      slug: "christmas-fireplace",
      type: "seasonal" && "home" || "home" || "seasonal",
      images: [
        {
          fields: {
            file: {
              url: fireplaceimg1
            }
          }
        },
      ]
    }
  }
];