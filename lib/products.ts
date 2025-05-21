import type { Product } from "./types";

export const products: Product[] = [
  {
    id: "1",
    name: "[집밥의완성] 소고기 미역국",
    price: 7900,
    originalPrice: 9900,
    discount: 20,
    image:
      "https://product-image.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/product/image/e81e1e27-9b72-442a-b3d8-86e969c33fba.jpg",
    category: "국/탕/찌개",
    description:
      "진한 소고기 육수와 부드러운 미역이 어우러진 건강한 미역국입니다. 간편하게 데워 드실 수 있어 바쁜 아침에도 든든하게 즐기실 수 있습니다.",
  },
  {
    id: "2",
    name: "[집밥의완성] 된장찌개",
    price: 6900,
    image:
      "https://product-image.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/product/image/c1ebe507-40f3-4f17-b44a-f64b2da03d2d.jpg",
    category: "국/탕/찌개",
    description:
      "구수한 된장과 신선한 채소가 어우러진 전통 된장찌개입니다. 풍부한 맛과 영양을 간편하게 즐겨보세요.",
  },
  {
    id: "3",
    name: "[집밥의완성] 소불고기",
    price: 12900,
    originalPrice: 15900,
    discount: 19,
    image:
      "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/1e143634-65e2-40e9-bbc8-8580f1b0e084.jpg",
    category: "메인요리",
    description:
      "부드러운 소고기에 달콤한 양념이 배어든 정통 불고기입니다. 밥 한 공기가 뚝딱 비워질 맛입니다.",
  },
  {
    id: "4",
    name: "[집밥의완성] 갈비찜",
    price: 19900,
    image:
      "https://product-image.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/product/image/bc5d253d-4444-4b37-af91-44c2a6014823.jpg",
    category: "메인요리",
    description:
      "부드럽게 익힌 갈비에 달콤한 양념이 깊이 배어든 프리미엄 갈비찜입니다. 특별한 날 간편하게 즐겨보세요.",
  },
  {
    id: "5",
    name: "[집밥의완성] 오징어볶음",
    price: 8900,
    originalPrice: 10900,
    discount: 18,
    image:
      "https://img-cf.kurly.com/hdims/resize/%5E%3E720x%3E936/cropcenter/720x936/quality/85/src/shop/data/goods/1653037345236l0.jpeg",
    category: "반찬",
    description:
      "신선한 오징어와 매콤한 양념이 어우러진 밥도둑 반찬입니다. 아이들도 좋아하는 맛으로 온 가족이 즐길 수 있습니다.",
  },
  {
    id: "6",
    name: "[집밥의완성] 김치찌개",
    price: 7900,
    originalPrice: 9900,
    discount: 20,
    image:
      "https://product-image.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/product/image/a695cf27-81b4-4ac2-8683-da431feedb75.jpeg",
    category: "국/탕/찌개",
    description:
      "잘 익은 김치와 신선한 재료로 끓여낸 얼큰한 김치찌개입니다. 추운 날 몸과 마음을 따뜻하게 해줄 한 그릇입니다.",
  },
  {
    id: "7",
    name: "[집밥의완성] 제육볶음",
    price: 9900,
    originalPrice: 12900,
    discount: 23,
    image:
      "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyNTA1MDdfNTAg%2FMDAxNzQ2NTczMjU5NDI4.Cjn0h5HC-Tdm3TPd5ICJ40M6U0zNQLQMmPdYzNPuwJwg.qmBYsQ3cHACffvUWojs_UcPoPDbS8Fy6WZ6fVF_uGVMg.JPEG%2F900%25A3%25DF20250430%25A3%25DF232207.jpg&type=sc960_832",
    category: "메인요리",
    description:
      "매콤달콤한 양념에 볶아낸 부드러운 돼지고기와 야채가 어우러진 제육볶음입니다. 밥 한 공기와 함께 즐겨보세요.",
  },
  {
    id: "8",
    name: "[집밥의완성] 시금치나물",
    price: 4900,
    originalPrice: 5900,
    discount: 17,
    image:
      "https://img-cf.kurly.com/hdims/resize/%5E%3E360x%3E468/cropcenter/360x468/quality/85/src/shop/data/goods/1611123823128l0.jpg",
    category: "반찬",
    description:
      "신선한 시금치를 깔끔하게 무쳐낸 건강한 나물반찬입니다. 간편하게 영양을 챙겨보세요.",
  },
];

export const allProducts: Product[] = products;
