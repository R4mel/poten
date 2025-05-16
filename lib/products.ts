import type { Product } from "./types"

export const products: Product[] = [
  {
    id: "1",
    name: "[집밥의완성] 소고기 미역국",
    price: 7900,
    originalPrice: 9900,
    discount: 20,
    image: "/placeholder.svg?height=300&width=300",
    category: "국/탕/찌개",
    description:
      "진한 소고기 육수와 부드러운 미역이 어우러진 건강한 미역국입니다. 간편하게 데워 드실 수 있어 바쁜 아침에도 든든하게 즐기실 수 있습니다.",
  },
  {
    id: "2",
    name: "[집밥의완성] 된장찌개",
    price: 6900,
    image: "/placeholder.svg?height=300&width=300",
    category: "국/탕/찌개",
    description: "구수한 된장과 신선한 채소가 어우러진 전통 된장찌개입니다. 풍부한 맛과 영양을 간편하게 즐겨보세요.",
  },
  {
    id: "3",
    name: "[집밥의완성] 소불고기",
    price: 12900,
    originalPrice: 15900,
    discount: 19,
    image: "/placeholder.svg?height=300&width=300",
    category: "메인요리",
    description: "부드러운 소고기에 달콤한 양념이 배어든 정통 불고기입니다. 밥 한 공기가 뚝딱 비워질 맛입니다.",
  },
  {
    id: "4",
    name: "[집밥의완성] 갈비찜",
    price: 19900,
    image: "/placeholder.svg?height=300&width=300",
    category: "메인요리",
    description: "부드럽게 익힌 갈비에 달콤한 양념이 깊이 배어든 프리미엄 갈비찜입니다. 특별한 날 간편하게 즐겨보세요.",
  },
  {
    id: "5",
    name: "[집밥의완성] 오징어볶음",
    price: 8900,
    originalPrice: 10900,
    discount: 18,
    image: "/placeholder.svg?height=300&width=300",
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
    image: "/placeholder.svg?height=300&width=300",
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
    image: "/placeholder.svg?height=300&width=300",
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
    image: "/placeholder.svg?height=300&width=300",
    category: "반찬",
    description: "신선한 시금치를 깔끔하게 무쳐낸 건강한 나물반찬입니다. 간편하게 영양을 챙겨보세요.",
  },
]

export const allProducts: Product[] = products
