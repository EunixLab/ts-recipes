// data/recipes.ts
import type { Recipe } from "../types/recipe";

const createRecipe = (data: Omit<Recipe, "id">): Recipe => ({
    id: crypto.randomUUID(),
    ...data,
});

export const recipes: Recipe[] = [
    createRecipe({
        title: "오이 깍두기",
        chef: "마카롱여사",
        category: "깍두기",
        imgUrl: "/images/cucumberRadishKimchi.png",
        videoUrl: "https://www.youtube.com/watch?v=4SFJJ0nkJy4",
        sourceUrl: "https://www.instagram.com/reel/Crmai5dtlnN/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        ingredients: [
            "오이 10개",
            "부추 200g",
            "채 썬 당근 조금",
            "채 썬 양파 반 개"
        ],
        seasonings: [
            "양파 반 개",
            "홍고추 6개",
            "생강 엄지손톱 크기 한 알",
            "꽃게액젓 3T(까나리, 멸치)",
            "새우젓 1T",
            "매실청 5T",
            "밥 2T",
            "고춧가루 5T",
            "마늘 10알(다져서)",
            "통깨 조금"
        ],
        steps: [
            "오이는 물에 담가 깨끗하게 씻어 준다.",
            "물을 끓여 뜨거운 채로 씻은 오이에 부어 주고 바로 찬물로 씻어준다.",
            "오이는 반 갈라 씨를 도려내고 깍두기 모양으로 썰어 준다.",
            "소금 2T에 버무려 30분 절이고 소금이 잘 녹게끔 중간에 버무려 준다.",
            "홍고추, 마늘, 생강, 양파 반 개, 꽃게액젓, 새우젓, 매실청, 밥 넣어 믹서기에 곱게 간다.",
            "간 양념에 고춧가루, 다진 마늘을 넣고 물기 뺀 오이, 부추, 채 썬 당근, 채 썬 양파를 넣어 버무린다.",
            "마지막에 통깨를 뿌려 바로 먹어도 되고 한나절 실온 숙성 후 냉장 보관 후 먹어도 된다."
        ]
    }),
    createRecipe({
        title: "오이탕탕이",
        chef: "김가연→마카롱여사",
        category: "밑반찬",
        imgUrl: "/images/threeCucumber1.png",
        videoUrl: "https://youtu.be/J2vm6oeYP7Q?si=gYPH4MYfEWKbm3j4",
        sourceUrl: "https://www.instagram.com/reel/CsUkzTUNUUT/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA===",
        ingredients: [
            "오이 2개",
            "짜지 않은 소금 1t",
            "3배 식초 2t",
            "설탕 2t",
            "다진 마늘 2t",
            "통깨 1T"
        ],
        steps: [
            "오이 2개는 깨끗이 씻어 가시를 제거하고 두들겨 한입 크기로 자른다. (두들겨 주면 간이 잘 뱀)",
            "다진 마늘 2t, 소금 1t, 설탕 2t, 식초 2t, 통깨 1T 넣어 버무린다.",
            "냉장고에 넣어 차게 하면 더 맛있다."
        ]
    }),
    createRecipe({
        title: "오이무침",
        chef: "조샘→마카롱여사",
        category: "무침",
        imgUrl: "/images/threeCucumber2.png",
        videoUrl: "https://www.youtube.com/watch?v=J2vm6oeYP7Q",
        sourceUrl: "https://www.instagram.com/reel/CsUkzTUNUUT/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        ingredients: [
            "다대기오이 2개(소금 2t / 설탕 2T / 식초 2T )"
        ],
        seasonings: [
            "고춧가루 1T",
            "파 1T",
            "마늘 1t",
            "참치액 0.5t",
            "참기름 한방울"
        ],
        steps: [
            "오이는 깨끗이 씻어 얇게 어슷하게 썰어 준다.",
            "소금 2t, 설탕 2T, 식초 2T 버무려 30분 정도 절인다.",
            "마늘 1t, 파 1T 다진다.",
            "절인 오이는 씻지 말고 꼭 짠다.",
            "수분 제거한 오이에 마늘 1t, 파 1T, 고춧가루 1T, 참치액 0.5t, 간 깨 1T 마지막에 참기름 살짝 넣어 무친다."
        ]
    }),
    createRecipe({
        title: "초간단 오이냉국 [27461]",
        chef: "마카롱여사",
        category: "냉국",
        imgUrl: "/images/threeCucumber3.png",
        videoUrl: "https://www.youtube.com/watch?v=J2vm6oeYP7Q",
        sourceUrl: "https://www.instagram.com/reel/CsUkzTUNUUT/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        ingredients: [
            "오이 2개"
        ],
        seasonings: [
            "생수 700ml",
            "소금 1T",
            "설탕 4T",
            "식초 6T",
            "통깨 1T"
        ],
        steps: [
            "오이 2개는 돌려 깎아 잘게 채 썰어 준다. (씨 부분을 제거하면 식감이 훨씬 아삭함)",
            "27461 오이 2개, 생수 700ml, 소금 1T, 설탕 4T, 식초 6T, 통깨 1T",
            "취향에 따라 청양고추 잘게 썰어 넣어 준다.",
            "얼음 띄워 차게 냉국 먹는다.",
    ]
    }),
    createRecipe({
        title: "갈치조림",
        chef: "마카롱여사",
        category: "조림",
        imgUrl: "/images/braisedCutlassfish.png",
        videoUrl: "https://www.youtube.com/watch?v=KPKSZeUmSg0",
        sourceUrl: "https://www.instagram.com/reel/CsIuZHWtccW/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        ingredients: [
            "갈치 큰 거 3토막",
            "감자 5개",
            "대파 1개",
            "청양고추 2개",
            "양파 중간 크기 1개"
        ],
        seasonings: [
            "마늘 1T",
            "생강즙 1t (생략가능)",
            "참치액 1T",
            "고춧가루 3T",
            "간장 2T",
            "맛간장 2T (없으면 간장1T, 설탕 0.5T)",
            "미림 1T",
            "설탕 1T",
            "육수 (멸치, 다시마 우린 육수 300~400ml)",
            "후추 조금",
            "참기름 1T"
        ],
        steps: [
            "감자 나박하게 썰어 준다.",
            "양파, 청양고추, 대파 썰어 준다.",
            "볼에 마늘 1T, 설탕 1T, 고춧가루 3T, 미림 1T, 간장 2T, 맛간장 2T, 생강술 1t, 참기름 1T, 참치액 1T, 후추 조금 넣어 섞는다.",
            "냄비 밑에 감자를 깔아주고 육수 400ml 넣는다.",
            "미리 만든 양념장을 감자 위에 나눠 넣어 주고 갈치를 올리고 양파와 대파, 남은 양념장을 위에 올려 뚜껑 닫고 센 불에 끓인다.",
            "센 불에 끓여 끓기 시작하면 중불로 낮춰 끓인다.",
            "감자와 고기가 익으면 냄비 뚜껑을 열고 센 불에 끓여 비린내를 날려준다.",
            "국물을 위로 자작자작 떠 올려 주면서 간이 잘 스며들게 하면 된다."
        ]
    }),
    createRecipe({
        title: "양념꽃게 무침",
        chef: "마카롱여사",
        category: "무침",
        imgUrl: "/images/seasonedCrab.png",
        videoUrl: "https://www.youtube.com/watch?v=s0o9o7327_U",
        sourceUrl: "https://www.instagram.com/reel/CqeWLSQMRzi/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        ingredients: [
            "선동 꽃게 10마리(2kg)",
            "양파 한 개",
            "청·홍고추 두 개씩"
        ],
        seasonings: [
            "생강 한 쪽",
            "설탕 2T",
            "간장 5T",
            "꽃게액젓 2T",
            "매실청 3T",
            "미림 2T",
            "마늘 2T",
            "생강 0.5t",
            "고운 고춧가루 3T",
            "고춧가루 6T",
            "물엿 3T",
            "통깨 2T"
        ],
        steps: [
            "냄비에 생강 한 쪽, 설탕 2T, 간장 5T, 꽃게액젓 2T, 매실청 3T, 미림 2T 넣어 보글보글 끓인다.",
            "설탕이 녹을 정도로 끓여 식혀 준다.",
            "선동 꽃게 10마리(2kg) 정도 깨끗하게 손질한다. (양념 꽃게는 숯게가 살이 많아 좋다)",
            "냉동 꽃게는 잠시 물에 담가 얼음이 녹기 전에 손질해야 살이 흘러내리지 않는다.",
            "집게발과 끝 쪽은 가위로 잘라 내고 게딱지 열어 아가미 제거하고 내장과 알은 흐르는 물에 씻어 준다.",
            "손질한 꽃게는 채 망에 올려 물기를 빼준다.",
            "살아 있는 꽃게로 할 때는 냉동실에 20분 이상 얼렸다가 손질하면 된다.",
            "깨끗하게 손질한 꽃게는 가위로 사 등분 해 주고 채 망에 올려 물기를 잘 빼줘야 양녕이 잘 붙는다.",
            "물이 잘 빠지는 채 망에 올려 냉장고에 넣어 물기 빼 줘도 된다.",
            "마늘 2T, 생강 0.5t 다진다.",
            "식힌 간장 물에 마늘 2T, 생강 0.5t, 고운 고춧가루 3T, 고춧가루 6T, 물엿 3T, 통깨 2T 넣어 섞어준다.",
            "넓은 볼에 물기 뺀 꽃게를 넣고 수분이 보이면 고춧가루 1T 정도 뿌려 수분을 잡아준다.",
            "양념장을 넣어 섞어 주면 완성. 양파 매운 고추 넣어도 좋다.",
            "양념에 버무려 통에 담아 냉장고에서 1시간 정도 후에 먹는다."
        ]
    }),
    createRecipe({
        title: "닭갈비",
        chef: "마카롱여사",
        category: "메인반찬",
        imgUrl: "/images/spicyGrilledChicken.png",
        videoUrl: "https://www.youtube.com/watch?v=_shKymtRGTQ",
        sourceUrl: "https://www.instagram.com/reel/CqJfsoQtIXZ/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        ingredients: [
            "닭정육 500g",
            "양배추 400g",
            "양파 1개",
            "당근 반 개",
            "고구마 1개",
            "깻잎 20장",
            "마늘 2T"
        ],
        seasonings: [
            "다진 마늘 2T",
            "설탕 2T",
            "고춧가루 3T",
            "고추장 1T",
            "간장 3T",
            "참기름 1T",
            "미림 1T",
            "매실청 1T",
            "참치액 1T",
            "카레 가루 0.5T",
            "후추 1t",
            "생수 2T"
        ],
        steps: [
            "양배추 400g 알맞게 썰어 씻어 준다.",
            "양파 1개, 당근 반 개, 대파 1개 썰어 준다.",
            "깻잎 20장 썰고 마늘 2T 다잔다.",
            "양념장(다진 마늘 2T, 설탕 2T, 고춧가루 3T, 고추장 1T, 간장 3T, 참기름 1T, 미림 1T, 매실청 1T, 참치액 1T, 카레가루 0.5T, 후추 1t, 생수 2T)을 섞는다.",
            "닭정육 500g 소금 약간, 미림 1T~2T 뿌린다.",
            "넓은 팬에 기름 2T 정도 뿌리고 밑간 한 닭을 노릇하게 굽는다.",
            "고기가 노릇해지면 양념장을 바르고 양배추, 양파, 대파, 당근, 고구마, 양념장을 넣어 볶아 준다.",
            "생수 2T 정도 넣어도 된다.",
            "고기는 익으면 가위로 잘라 준다. 센 불에 볶지 말고 중불 정도에서 뭉근하게 골고루 볶아 준다.",
            "떡 또는 치즈는 취향껏 넣어 주고 깻잎은 마지막 단계에서 넣으면 끝."
        ]
    }),
    createRecipe({
        title: "순대볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/stirFriedKoreanSausage.png",
        videoUrl: "https://www.youtube.com/watch?v=D0hQ8Vj55Hk",
        sourceUrl: "https://www.instagram.com/reel/CqCzlhtp3sE/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        ingredients: [
            "순대 500g",
            "양배추 400g",
            "양파 1개",
            "대파 1개",
            "당근있으면 조금",
            "깻잎 15 장",
            "청고추 1 개",
            "홍고추 1개"
        ],
        seasonings: [
            "고춧가루 3T",
            "고추장 0.5 T",
            "진간장 3T",
            "마늘 2T",
            "설탕 2T",
            "청주 1T",
            "생강 가루 약간",
            "후춧가루 약간",
            "생수 약간",
            "들기름 3T"
        ],
        steps: [
            "시판용 순대 500g 끓는 물에 봉지째 5분 삶고 5분 그대로 뜸 들인다.",
            "양배추 400g 알맞은 크기로 썰어 물에 담가 씻어 준다.",
            "양파 1개, 대파 1개, 청·홍고추 한 개씩, 마늘 2T, 당근 반 개, 깻잎 15장 썰어 준다.",
            "고춧가루 3T, 고추장 0.5 T, 진간장 3T, 마늘 2T, 설탕 2T, 청주 1T, 생강가루 약간, 후춧가루 약간, 생수 약간, 들기름 3T 넣어 양념을 섞어 준다.",
            "순대는 터지지 않게 가위로 큼지막하게 잘라 준다. (너무 작게 썰면 볶으면서 터질 수 있다.",
            "넓은 팬에 들기름 2T 양파, 대파, 볶다가 양배추를 넣어 숨이 죽게 볶아 준다.",
            "당근, 고추, 순대를 넣고 양념장을 넣어 볶아 준다. (불 조절은 중불 정도)",
            "양념이 너무 퍽퍽하면 약간의 물 1T 정도 추가해 줘도 된다.",
            "양념에 섞은 순대를 가위로 잘게 잘라 볶아 준다.",
            "마지막 깻잎을 올려 섞어 주고 통깨를 뿌려 주면 완성"
        ]
    }),
    createRecipe({
        title: "쪽파김치",
        chef: "마카롱여사",
        category: "김치",
        imgUrl: "/images/greenOnionKimchi.png",
        videoUrl: "https://www.youtube.com/watch?v=WIrG9FzlVsk",
        sourceUrl: "https://www.instagram.com/reel/CpHx47iLRZR/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
        ingredients: [
            "쪽파 2kg"
        ],
        seasonings: [
            "양파 1개",
            "배 반 개",
            "생강 한 쪽",
            "새우젓 2T",
            "매실청 5T",
            "고춧가루 2컵(200ml)"
        ],
        steps: [
            "쪽파 2kg 뿌리 쪽 잘라내고 마른 겉잎은 다듬어 준다. (어린 파가 고소하니 맛있다.)",
            "물에 잠시 담가 깨끗하게 씻어 준다. 씻은 다음 물기 빼 준다.",
            "훌훌 털어 물기를 잘 제거해야 양념이 착 달라붙고 흘러내리지 않는다.",
            "흰대 부분이 아래로 가게 세운 다음 꽃게액젓 1컵(200ml) 부어 흰 대쪽이 먼저 절여지게 요령껏 해 준다. (흰 대쪽이 너무 통통하면 칼로 열십자 내준다)",
            "양파 1개, 배 반 개, 생강 엄지 손 크기 한 개 잘게 썰어 새우젓 2T, 매실청 5T 믹서기에 갈아준다.",
            "파는 30분 정도 절여 건져내고 남은 액젓에 배, 양파, 생간 간 양념을 부어 준다.",
            "고춧가루 한 컵(200ml) 부어 섞어 준다. 잠시 두면 색이 빨갛게 물든다.",
            "파에 고춧가루 한 컵(200ml) 넣어 비벼준다. (절인 파에 고춧가루 비벼주면 수분을 잡아줌.)",
            "고춧가루 먼저 비빈 다음 양념을 비벼주면 된다.",
            "마지막 통깨 듬뿍 넣어 통에 담아 먹으면 된다. 바로 먹어도 굿 익혀 먹어도 굿!!"
        ]
    }),
    createRecipe({
        title: "오이 맛살 냉채",
        chef: "마카롱여사",
        category: "냉채",
        imgUrl: "/images/cucumberCrabColdSalad.png",
        videoUrl: "https://www.youtube.com/watch?v=xEzkldngttU",
        sourceUrl: "",
        ingredients: [
            "오이 2개",
            "맛살 4개"
        ],
        seasonings: [
            "설탕 2T",
            "화이트 발사믹 식초 3T",
            "소금 1t",
            "연겨자 1t",
            "통깨조금",
            "고추기름 1T"
        ],
        steps: [
            "오이 두 개 사 등분 해서 씨를 제거하고 채 썰어 준다.",
            "마늘 한 개 다져준다.",
            "맛살 4개 결대로 찢어 준다.",
            "설탕 2T, 화이트 발사믹 식초 3T, 소금 1t, 연겨자 1t 넣어 설탕 연겨자 녹여준다",
            "볼에 넣어 취향에 따라 고추기름 1T 추가해서 버무려 준다.",
            "마지막 통깨 뿌려 먹으면 된다."
        ]
    }),
    createRecipe({
        title: "오이샌드위치",
        chef: "마카롱여사",
        category: "샌드위치",
        imgUrl: "/images/cucumberSandwich.png",
        videoUrl: "https://www.youtube.com/watch?v=xEzkldngttU",
        sourceUrl: "",
        ingredients: [
            "오이 2개"
        ],
        seasonings: [
            "마요네즈 4T"
        ],
        steps: [
            "오이 두 개 씨를 제거하고 가늘게 채 썰어 소금 약간 넣어 15분 정도 절여 준다.",
            "식빵은 알맞은 크기로 썰어 양쪽 다 버터를 발라 준다.",
            "소금에 절인 오이는 씻지 말고 지그시 짜주고 마요네즈 4T에 버무려 준다.",
            "버터 바른 빵 위에 넉넉하게 올려 먹으면 씹는 식감과 향긋한 오이 고소한 맛이 느껴진다."
        ]
    }),
    createRecipe({
        title: "햇마늘 장아찌 레시피",
        chef: "마카롱여사",
        category: "장아찌",
        imgUrl: "/images/pickledGarlic.png",
        videoUrl: "https://www.youtube.com/watch?v=zoOoYKs2VKk",
        sourceUrl: "",
        ingredients: [
            "마늘 반접(50개기준)"
        ],
        seasonings: [
            "식초 750ml",
            "백설탕 650g(오뚜기 양조식초 1.8L)",
            "소금 55g(토판염)",
            "간장230ml(몽고장유 진간장)",
            "물 2L"
        ],
        steps: [
            "햇 통마늘 50개 흙을 털어내고 두세 겹 남기고 껍질을 벗겨 준다.",
            "마늘 주대가 약간 초록색이 남아 있어야 잘 벗겨진다.",
            "너무 바짝 마른 마늘은 벗기기 힘들다.",
            "두세 겹 남기고 대를 잘라준다. (통마늘로 담가야 장아찌 맛이 좋다)",
            "흐르는 물에 한두 번 씻어 물기 빼준다. (마늘 대를 미리 자르지 않고 씻고 나서 잘라주면 물기 빼기 좋다)",
            "소독한 병에 물기 뺀 마늘을 차곡차곡 담아 준다.",
            "통마늘 50개 오뚜기 양조식초 1.8l를 부어 준다. 식초가 잠기지 않아도 된다.",
            "잠기게 부어주면 산도가 너무 올라갈 수 있다. (식초로 절이는 이유는 마늘의 아린 맛을 제거 효과)",
            "빛이 완전히 차단되게끔 일주일 실온에 둔다. 중간에 한두 번 마늘 위치를 뒤집어 준다.",
            "일주일 지나 식초는 따라내고 통마늘은 다시 병에 넣어 준다. 따라 낸 식초 750ml만 남기고 버려도 된다.",
            "냄비에 식초 750ml, 백설탕 650g, 소금 55g(토판염), 간장 230ml(몽고장유 진간장), 물 2l 넣어 팔팔 끓여 준다.",
            "팔팔 끓으면 뜨거운 장물을 마늘에 붓고 뜨거운 상태에서 뚜껑을 닫아 한 달간 실온 보관해 준다.",
            "검정 비닐로 빛을 차단해 준다. 마늘의 녹변 현상을 방지한다."
        ]
    }),
    createRecipe({
        title: "물 없이 만드는 오이지 ",
        chef: "이보은 샘→마카롱여사",
        category: "장아찌",
        imgUrl: "/images/cucumbersPickled.png",
        videoUrl: "https://www.youtube.com/watch?v=kHnDmmczUes",
        sourceUrl: "",
        ingredients: [
            "백오이 50개"
        ],
        seasonings: [
            "설탕 900g",
            "소금(천일염) 450g",
            "청양고추 또는 베트남 고추 10개 정도",
            "식초 900g",
            "소주 한병 350ml"
        ],
        steps: [
            "백오이 50개는 흐르는 물에 깨끗하게 씻어 준다.",
            "설탕 900g, 소금(천일염) 450g 썩어 준다.",
            "통에 오이를 차곡차곡 올리고 소금 설탕 뿌려 준다. 오이 중간중간 소금과 설탕을 섞어 뿌려 주면 좋다.",
            "청양고추 또는 베트남 고추 10개 정도 넣어 준다. 식초 900ml, 소주 한 병 350ml 위에 뿌려 준다.",
            "무거운 누름돌 같은 걸로 눌러 주고 오이에서 물이 생기면 위아래 위치 바꿔주면 좋다.",
            "무거운 걸로 눌러주면 푹 잠겨 쪼글쪼글해 진다. 10일 정도 실온에 두고 익혀 준다.",
            "10일 정도 지나 오이만 건져 통에 담아 냉장 보관 해놓고 먹으면 된다."
        ]
    }),
    createRecipe({
        title: "오이지 무침 ",
        chef: "마카롱여사",
        category: "무침",
        imgUrl: "/images/cucumbersPickledSeasoned-.png",
        videoUrl: "https://www.youtube.com/watch?v=kHnDmmczUes",
        sourceUrl: "",
        ingredients: [
            "오이지 5개"
        ],
        seasonings: [
            "다진 파 1T",
            "통깨 1T",
            "고춧가루 1t",
            "화이트 발사믹 1T(선택)"
        ],
        steps: [
            "오이 5개 정도 꺼내 물에 한 번 씻고(안 씻고 바로 무쳐도 된다.)",
            "다진 파 1T, 통깨 1T, 고춧가루 1t, 화이트 발사믹 1T(선택),  오이 3개 기준 무쳐 먹으면 된다.",
            "오이는 썰어 물기를 지그시 꼭 짜주면 더 오도독하니 맛있다.",
            "신맛 싫은 분은 올리고당 1T 넣으면 좋다."
        ]
    }),
    createRecipe({
        title: "그린파파야 장아찌",
        chef: "마카롱여사",
        category: "장아찌",
        imgUrl: "/images/greenPapayaPickled.png",
        videoUrl: "https://www.youtube.com/watch?v=E7XG6iL2RP8",
        sourceUrl: "",
        ingredients: [
            "그린파파야 큰 거 4개"
        ],
        seasonings: [
            "베트남 고추 적당히",
            "설탕 600g",
            "간장 600ml",
            "물 600ml ",
            "식초 600ml"
        ],
        steps: [
            "파파야는 깨끗하게 씻어 준다.",
            "베트남 고추도 씻어 준다.",
            "필러를 이용해 파파야 껍질을 벗겨준다.",
            "솜땀 칼을 이용해 겉면을 벗겨준다. (솜땀 샐러드용",
            "반 갈라 씨를 제거하고 썰어 준다. 솜땀 칼을 이용 해 한 껍질 벗겨주면 모양이 예쁘다",
            "베트남 고추도 썰어 준다. 말린 거 사용해도 된다. 고추 양은 취향껏 넣어 준다",
            "통에 잘라 놓은 파파야와 고추를 담아 준다.",
            "간장 물 비율은  1:1:1:1(설탕:간장:물:식초)이다. 파파야 큰 거 4개 기준 600ml씩 넣었다.",
            "간장 물을 팔팔 끓여 뜨거운 상태로 부어 줍니다. 수분이 많은 장아찌는 뜨거운 걸 부어주면 더 아삭하다.",
            "식으면 냉장고에 넣어 하루 지나 먹는다."
        ]
    }),
    createRecipe({
        title: "쏨땀 샐러드",
        chef: "마카롱여사",
        category: "샐러드",
        imgUrl: "/images/somtamSalad.png",
        videoUrl: "https://www.youtube.com/watch?v=E7XG6iL2RP8",
        sourceUrl: "",
        ingredients: [
            "파파야 400~500g",
            "볶은 땅콩",
            "고수"
        ],
        seasonings: [
            "라임 1개", 
            "방울토마토 5알",
            "채 썬 당근 반 개",
            "마늘 3알",
            "베트남 고추 3~4개",
            "설탕 2T",
            "꽃게액젓 2T"
        ],
        steps: [
            "생땅콩 한 줌 중불에 볶아 준다.",
            "볶은 땅콩은 식혀주고 팬으로 눌러 으깨 주고 껍질은 제거해 준다. (부채를 이용해 한 방에 껍질을 날린다)",
            "라임 한 개 사 등분 해 준다.",
            "방울토마토 3~4개 잘라 준다.",
            "당근 반 개 채 썰어 준다.",
            "마늘 3개 굵게 다져 주고 베트남 고추 3~4개 잘게 잘라 준다.",
            "넉넉한 볼에 마늘, 고추, 토마토, 라임을 넣어 즙을 내주고 설탕 2T, 꽃게액젓 2T 넣어 설탕을 녹여 준다.",
            "채 썬 당근, 채 썬 그린파파야 400g 넣어 버무려 준다.",
            "고수와 다진 땅콩 넣어 버무려 준다. 고수는 취향껏",
            "새콤달콤 향긋하면서 식감이 예술이다."
        ]
    }),
    createRecipe({
        title: "구운 쥐포조림",
        chef: "마카롱여사",
        category: "조림",
        imgUrl: "/images/braisedDriedFilefishFillet.png",
        videoUrl: "https://www.youtube.com/watch?v=MmsWmQCKYxE",
        sourceUrl: "",
        ingredients: [
            "쥐포 300g"
        ],
        seasonings: [
            "식용유 2T",
            "고추기름 1T",
            "미림 2T",
            "물엿 2T",
            "간장 1T",
            "생강술 0.5T",
            "고춧가루 1T",
            "설탕 1T",
            "참기름 0.5T",
            "통깨 1T"
        ],
        steps: [
            "쥐포 300g 구워 준다.",
            "구운 쥐포는 가위로 알맞은 크기로 잘라 준다.",
            "식용유 2T, 고추기름 1T, 미림 2T, 물엿 2T, 간장 1T, 생강술 0.5T, 고춧가루 1T, 설탕 1T 양념을 바글바글 끓여 준다.",
            "약불로 줄이고 양념에 쥐포를 볶아 준다.",
            "약불로 볶다가 양념이 스며들면 참기름 조금 통깨 뿌려 준다."
        ]
    }),
    createRecipe({
        title: "달걀장",
        chef: "마카롱여사",
        category: "장조림",
        imgUrl: "/images/braisedEggs.png",
        videoUrl: "https://www.youtube.com/watch?v=BbFDtk3IdmE",
        sourceUrl: "",
        ingredients: [
            "달걀 7개",
            "양파 반 개",
            "청양고추 1개",
            "홍고추 1개",
            "쪽파 2개 ",
            "통깨 2T"
        ],
        seasonings: [
            "간장 100ml",
            "물 200ml",
            "설탕 2T",
            "참치액 1T",
            "다시마 손바닥 크기 한장"
        ],
        steps: [
            "양파 반 개, 청양고추 1개, 홍고추 한 개, 쪽파 2개 다져 준다.",
            "달걀 7개 (반숙 삶기) 찬물에 넣어 12분 삶아 준다.",
            "삶은 달걀은 얼음물에 담가 껍질을 벗겨 준다.",
            "간장 100ml, 물 200ml, 설탕 2T, 참치액 1T 간장 물이 끓으면 불을 끄고 다시마 조금 넣어 우려 준다.",
            "식으면 다시마를 건져 준다.",
            "통에 달걀을 담고 식힌 간장 물을 부어 준다. 다진 파, 다진 양파, 다진 고추, 통깨 2T 정도 넣어 준다.",
            "간이 들게끔 냉장고에 보관한다. 6시간 이상",
            "밥 위에 간장 양념 조금 하고 참기름 뿌려 먹으면 아주 맛있다.",
            "남은 간장 물은 버섯이나 감자 볶아 먹는다. 기름 조금 넣어 버섯을 볶다가 간장 넣고 물엿 조금 넣는다."
        ]
    }),
    createRecipe({
        title: "대패삼겹 숯불갈비맛",
        chef: "쭈야공님→마카롱여사",
        category: "메인반찬",
        imgUrl: "/images/porkBellyGrilledRibs.png",
        videoUrl: "https://www.youtube.com/watch?v=pFhhQKK1VHo",
        sourceUrl: "",
        ingredients: [
            "냉동 대패삼겹살 600g",
            "쪽파 한 줌",
            "통깨 1T"
        ],
        seasonings: [
            "마늘 5알 (다진 마늘 1.5T 정도)",
            "미림 1t",
            "설탕 2T",
            "간장 3T",
            "참기름 1T"
        ],
        steps: [
            "냉동 대패삼겹살 600g, 설탕 2T, 간장 3T, 미림 0.5T, 참기름 1T 밑간해 준다.",
            "쪽파 한 줌 송송 썰어 준다.",
            "마늘 1.5T 다져 준다.",
            "마늘 넣어 섞어 준다. 쪽파는 마지막에 부려 준다.",
            "팬을 중불에 달궈 고기를 올려 구워 준다.",
            "고기가 얇으니, 중불에 젓가락으로 풀어 가면서 구워 준다.",
            "중불 정도에 볶다가 마지막에 센 불로 바싹 구워야 고기가 질기지 않고 맛있다.",
            "고기가 다 익으면 토치로 윗면을 한번 지져주면 좋다.",
            "마지막에 다진 파와 통깨 뿌려 준다.",
            "대패삼겹살이라 고기 기름이 많이 나온다. 팬을 기울여 기름을 제거한다.",
            "다양하게 쌈이랑 함께 먹는다."
        ]
    }),
    createRecipe({
        title: "냉이장아찌",
        chef: "마카롱여사",
        category: "장아찌",
        imgUrl: "/images/pickledShepherdsPurse.png",
        videoUrl: "https://www.youtube.com/watch?v=fUtyixuH98g",
        sourceUrl: "",
        ingredients: [
            "냉이 400~500g"
        ],
        seasonings: [
            "간장 1컵",
            "설탕 1컵",
            "물 1컵",
            "식초 1컵",
            "미림 반컵"
        ],
        steps: [
            "냉이 400~500g 깨끗하게 씻어 채소 탈수기로 물기를 빼 준다.",
            "장아찌 비율은 1:1:1:1(간장:물:식초:설탕) 이 비율에서 각자 조금씩 입맛에 맞게 맞춰 준다.",
            "설탕이 녹을 정도로 팔팔 끓여 준다.",
            "물기 뺀 냉이에 베트남 고추 취향껏 넣어 준다. 10개 정도 부시고 뜨거운 장아찌 물을 부어 준다.",
            "밀폐용기에 담아 냉장 보관해 놓고 고기 또는 전이랑 같이 먹으면 끝내주게 맛이 좋다."
        ]
    }),
    createRecipe({
        title: "미나리 불고기전",
        chef: "마카롱여사",
        category: "전",
        imgUrl: "/images/waterParsleyBulgogiPancake.png",
        videoUrl: "https://www.youtube.com/watch?v=fUtyixuH98g",
        sourceUrl: "",
        ingredients: [
            "미라니 100g",
            "청양고추 2개",
            "소 불고깃감 200g"
        ],
        seasonings: [
            "후추조금",
            "간장 1T",
            "참기름 0.5T",
            "설탕 0.5T",
            "미림 1T"
        ],
        steps: [
            "미나리는 한줄기씩 손으로 훑어가며 씻어 준다.",
            "미나리 100g, 청양고추 2개 잘게 썰어 준다.",
            "소 불고깃감 200g 종이 수건에 올려 꾹꾹 눌러 핏물 제거해 주고 잘게 썰어 준다.",
            "소 불고깃감 200g, 후추 조금, 간장 1T, 참기름 0.5T, 설탕 0.5T, 미림 1T 넣어 양념해 준다.",
            "부침가루 5T 정도 넣어 섞고 불고기 양념한 거 섞어 준다.",
            "팬을 달궈 넉넉한 기름을 넣고 얇게 펴 앞뒤로 노릇하게 익혀 준다. (얇게 펴서 익혀야 맛이 좋다)",
            "충분한 기름에 중불에 노릇하게 익혀 준다."
        ]
    }),
    createRecipe({
        title: "닭볶음탕",
        chef: "마카롱여사",
        category: "탕",
        imgUrl: "/images/braisedSpicyChicken.png",
        videoUrl: "https://www.youtube.com/watch?v=HEwCSy-XQpw",
        sourceUrl: "",
        ingredients: [
            "토막 닭 800g",
            "감자 3개",
            "양파 1개",
            "당근 1개",
            "물엿 1T"
        ],
        seasonings: [
            "다진 파 1개",
            "다진 마늘 1T",
            "설탕 1T",
            "몽고간장 4T",
            "고춧가루 2T",
            "미림 2T",
            "참치액 1T",
            "참기름 1T",
            "고추장 크게 1T",
            "후추 드르륵 20번"
        ],
        steps: [
            "토막 닭 800g 찬물에 한 번 씻고 찬물에 담가 청주 또는 미림 2T, 생강가루 1t나 생강청 2T 넣어 15 정도 넣어 핏물 및 닭 냄새 제거해 주세요.",
            "양파 1개, 감자 3개, 당근 1개 알맞게 썰어 준다.",
            "대파 1개, 마늘 1T 다져 준다.",
            "다진 파, 다진 마늘, 설탕 1T, 간장 4T, 미림 2T, 참치액 1T, 참기름 1T, 고춧가루 2T, 고추장 크게 1T, 후추 조금 양념을 섞어 준다.",
            "냄비에 식용유 1T, 참기름 1T 닭을 굽듯 노릇하게 지져 준다.",
            "겉면이 노릇해지면 감자, 당근, 양파 올리고 양념장과 물 150ml 넣어 섞어 준다.",
            "끓기 시작하면 중약 불로 줄이고 30분 정도 푹 익혀 준다.",
            "중간에 타지 않게 섞어준다. (중약불 중요) 뭉근하게 끓여야 수분이 충분하게 나온다.",
            "마지막에 물엿 1T 둘러주면 윤기 좌르르"
        ]
    }),
    createRecipe({
        title: "황태포볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/Stir-friedDriedPollack.png",
        videoUrl: "https://www.youtube.com/watch?v=WHbIaTGG_0k",
        sourceUrl: "",
        ingredients: [
            "가늘게 찟은 황태포 80~100g",
            "쪽파 한 줌",
            "통깨 1T"
        ],
        seasonings: [
            "설탕 1T",
            "고춧가루 1T",
            "매실청 1T",
            "미림 2T",
            "참기름 1T",
            "식용유 1T",
            "간장 2T",
            "물엿 2T",
            "고추장 크게 2T"
        ],
        steps: [
            "황태채 80~100g 얇게 손으로 찍어 준다. (얇을수록 맛이 좋다)",
            "쪽파 한 줌 잘게 다져주면 예쁘다.",
            "팬에 설탕 1T, 고춧가루 1T, 매실청 1T, 미림 2T, 참기름 1T, 식용유 1T, 간장 2T, 물엿 2T, 고추장 크게 2T 양념이 바글바글 끓으면 약불로 줄이고 황태채를 넣어 볶아 준다.",
            "볶을 때는 탈 수 있으니, 약불에 볶아 준다.",
            "황태 건조 상태에 따라 양념이 부족하면 물엿과 미림 약간 추가해도 된다."
        ]
    }),
    createRecipe({
        title: "콩나물파채무침",
        chef: "마카롱여사",
        category: "무침",
        imgUrl: "/images/beanSproutSeasonedScallions.png",
        videoUrl: "https://www.youtube.com/watch?v=91OqBZnx_7w",
        sourceUrl: "",
        ingredients: [
            "대파 25cm 길이 4개",
            "콩나물 300g",
            "깻잎 10장"
        ],
        seasonings: [
            "간장 1T",
            "꽃게액젓 1T",
            "참치액 1T",
            "설탕 1T",
            "참기름 2T",
            "고춧가루 1T",
            "통깨 1T",
            "식초 1T(선택)"
        ],
        steps: [
            "깻잎 10장 깨끗하게 씻어 돌돌 말아 채 썰어 준다.",
            "대파 4개 진액이 들어있는 속대는 빼고 3번 접어 가늘게 채 썰어 준다.",
            "대파는 씻어 얼음물에 담가 30분 정도 둔다. (매운맛은 빠지고 식감이 살아난다)",
            "콩나물 한 봉지(300g), 물 150ml 소금 한 꼬집 넣어 끓기 시작하면 불을 끄고 2분 뜸 들여 주고 채 망에 올려 식혀 준다.",
            "간장 1T, 액젓 1T, 참치액 1T, 설탕 1T 넣어 설탕이 녹게끔 저어 준다.",
            "대파는 건져 채소 탈수기로 물기를 빼 준다.",
            "대파에 참기름 2T 넣어 조물조물 무쳐 준다. (참기름을 먼저 섞어주면 물이 생기지 않는다)",
            "고춧가루 1T, 양념장을 넣어 비벼 준다.",
            "마지막 통깨 뿌려 주면 완성. (새콤한 맛 좋아하면 식초 1T 정도 추가)"
        ]
    }),
    createRecipe({
        title: "버섯해물전 ",
        chef: "마카롱여사",
        category: "전",
        imgUrl: "/images/mushroomSeafoodPancake.png",
        videoUrl: "https://www.youtube.com/watch?v=bR9njEt2H6o",
        sourceUrl: "",
        ingredients: [
            "느타리 200g",
            "만가닥 300g",
            "황금 팽이버섯 360g",
            "오징어 3마리",
            "새우 600g",
            "쪽파 한 줌",
            "청양고추 2개"
        ],
        seasonings: [
            "달걀 5개",
            "부침가루 5T",
            "전분가루 1T",
            "소금 조금"
        ],
        steps: [
            "느타리 200g, 만가닥 300g, 황금 팽이버섯 360g 버섯은 씻지 말고 훌훌 털러 밑동을 잘라 준다.",
            "끓는 물에 소금 1t 정도 넣고 버섯을 넣어 데쳐 건져 준다. (살짝 데쳐 물기 빼 주면 된다)",
            "버섯 데친 물에 미림 1T 정도 넣어 새우와 오징어도 데쳐 준다.",
            "쪽파 한 줌, 청양고추 2개 송송 썰어 준다.",
            "데친 버섯은 송송 썰어 준다. 오징어, 새우도 크기에 맞게 썰어 준다.",
            "큰 볼에 재료를 모두 넣고 부침가루 5T, 전분 가루 1T, 달걀 5개, 소금 약간 넣어 재료를 섞어 준다.",
            "팬을 달궈 넉넉한 기름에 노릇하게 구워 준다."
        ]
    }),
    createRecipe({
        title: "무조림",
        chef: "마카롱여사",
        category: "조림",
        imgUrl: "/images/braisedRadish.png",
        videoUrl: "https://www.youtube.com/watch?v=jbtF0njUcJ0",
        sourceUrl: "",
        ingredients: [
            "무 큰 거 한개 (1.3kg 정도)",
            "멸치 한줌 + 물 1L"
        ],
        seasonings: [
            "양파 반 개",
            "대파 한개",
            "마늘 1T",
            "설탕 1T",
            "고춧가루 3T",
            "간장 2T",
            "맛간장 2T",
            "미림 1T",
            "참기름 1T",
            "참치액 1T",
            "생강즙 1t",
            "후추 조금"
        ],
        steps: [
            "무 큰 거 한 개 (1.3kg 정도) 두툼하게 썰어 준다.",
            "모서리 부분 돌려 깎아주면 부서지지 않는다.",
            "냄비 바닥에 멸치 한 줌 깔고 무를 올리고 물을 자박하게 붓는다. (무에 물이 잠기게 1리터 정도)",
            "굵은소금 한 꼬집 넣어 15분 삶아 준다.",
            "센 불에 15분 정도 끓이고 불 끄고 1시간 정도 뜸을 들여 준다. (무가 투명해지게 끓여 주면 된다)",
            "양파 반 개, 대파 1줄기, 마늘 1T 썰어 준다.",
            "설탕 1T(맛간장이 들어가니 설탕량 줄여도 된다. 겨울 무는 엄청나게 달아 조금 줄여도 된다)",
            "고춧가루 3T, 간장 2T, 맛간장 2T(간장 1T, 설탕 0.5T), 미림 1T, 참기름 1T, 참치액 1T, 생강즙 1t 넣어 섞어 준다",
            "뜸 들인 무에 양념장을 넣어 끓여 준다. 30분 정도",
            "끓기 시작하면 중불로 낮춰 30분 정도 뭉근하게 끓여주면 된다."
        ]
    }),
    createRecipe({
        title: "오징어볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/stir-friedSquid.png",
        videoUrl: "https://www.youtube.com/watch?v=-btAib3PVEU",
        sourceUrl: "",
        ingredients: [
            "반건조 오징어 3마리",
            "대파 1개",
            "청양고추 2~3개",
            "양파 1개"
        ],
        seasonings: [
            "마늘 1T",
            "설탕1T",
            "고춧가루 1T",
            "미림 1T",
            "간장1T",
            "참치액 1T",
            "물엿 1T",
            "참기름 1T",
            "고추장 2T",
            "후추 솔솔",
            "통깨 조금"
        ],
        steps: [
            "대파 1줄기, 청양고추 2~3개, 양파 중간 크기 한 개, 마늘 3톨 다져 준다.",
            "마늘 1T, 설탕 1T, 고춧가루 1T, 미림 1T, 간장 1T, 참치액 1T, 물엿 1T, 참기름 1T, 고추장 2T, 후추, 통깨 조금",
            "설탕이 녹게끔 양념을 섞어 준다.",
            "반건조 오징어 3마리 가위로 먹기 좋은 크기로 잘라 준다.",
            "팬을 달궈 약간의 기름을 넣어 양파 대파 볶다가 반건조 오징어 넣어 볶아 준다.",
            "오징어가 어느 정도 익으면 양념장을 넣어 섞어 준다.",
            "마지막에 매운 고추 썰어 놓은 것을 넣고 통깨 뿌려 준다"
        ]
    }),
    createRecipe({
        title: "스테이크 두부조림",
        chef: "마카롱여사",
        category: "조림",
        imgUrl: "/images/steakBraisedTofu.png",
        videoUrl: "https://www.youtube.com/watch?v=SWARvTrxBbQ",
        sourceUrl: "",
        ingredients: [
            "두부 한 모 380g",
            "스테이크용 고기 한덩이 235g"
        ],
        seasonings: [
            "고춧가루 2T",
            "설탕 1T",
            "몽고간장 30ml",
            "참기름 1T",
            "굴 소스 0.5T",
            "물 100m",
            "마늘 1T",
            "양파 중간 크기 1개",
            "청양고추 2개",
            "대파 또는  쪽파 5~6줄기",
            "통깨 1T"
        ],
        steps: [
            "두부 한 모 꾹 눌러 물기를 제거해 준다.",
            "스테이크용 고기 한 덩이 250g 오일, 소금 뿌려 준다.",
            "대파 1개, 양파 중간 크기 한 개, 청양고추 2개 송송 썰어 준다.",
            "마늘 1T 다져 준다.",
            "물기 뺀 두부는 먹기 좋은 크기로 잘라 준다.",
            "고춧가루 2T, 설탕 1T, 간장 40ml, 참기름 1T, 굴 소스 0.5T, 물 100m, 마늘 1T, 양파, 고추",
            "팬을 달궈 약간의 기름을 바르고 고기를 구워 준다.",
            "고기는 실온에 한 시간 정도 뒀다 구우면 맛이 좋다. 처음 센 불에 고기 올리고 중불로 낮춰 뒤집어 가며 구워 준다.",
            "고기 구운 팬에 바로 두부를 구울 거라 고기를 이동하면서 구워 주면 열이 골고루 분산되어 고기도 잘 익고 팬도 타지 않는다.",
            "구운 고기는 꺼내고 두부를 올려 노릇하게 구워 준다.",
            "두부가 노릇하게 구워지면 양념장을 부어 지글지글 끓여 준다.",
            "끓기 시작하면 약불에 15분 정도 뭉근하게 지져준다. 양념을 두부 위로 중간중간 끼얹어 주면 좋다.",
            "스테이크용 고기는 먹기 좋은 크기로 잘라 준다.",
            "마지막에 통깨 뿌려 준다.",
            "밥 위에 두부조림을 올리고 스테이크용 고기를 올려 주면 된다."
        ]
    }),
    createRecipe({
        title: "LA 갈비",
        chef: "마카롱여사",
        category: "갈비",
        imgUrl: "/images/LALibs.png",
        videoUrl: "https://www.youtube.com/watch?v=I_8LK-FlbeM",
        sourceUrl: "",
        ingredients: [
            "구이용 LA갈비  2kg"
        ],
        seasonings: [
            "배 반 개",
            "양파 중간 크기 1개",
            "마늘 50g",
            "물 600ml",
            "간장 1컵",
            "설탕 0.5컵",
            "정종 또는 미림 50ml",
            "매실청 2T",
            "참기름 3T",
            "깨소금 3T",
            "후추 1t",
            "생강즙 1T 또는 생강청 1T"
        ],
        steps: [
            "LA갈비 2kg 찬물에 30분에서 1시간 핏물 빼 준다.",
            "핏물 제거 후 흐르는 물에 씻어 채반에 올려 물기 빼 준다.",
            "대파 2개 잘게 다져 준다.",
            "배 반 개, 양파 중간 크기 1개, 마늘 50g 잘게 잘라 물 600ml 넣어 믹서기에 곱게 갈아준다.",
            "고기는 물기 없게 종이타월에 꾹꾹 눌러 수분 제거해 주면 양념이 잘 스며들고 냄새 없이 좋다.",
            "보관 통에 간 양념 붓고 간장 1컵, 설탕 반 컵, 정종 또는 미림 50ml, 매실청 2T, 참기름 3T, 깨소금 3T, 후추 조금, 다진 파, 생강청 1T 넣어 준다.",
            "설탕이 녹게끔 저어 준 다음 고기를 넣어 푹 잠기게 해 준다.",
            "실온에 1~2시간 두고 냉장고에 보관해 준다. 하루 정도 지나 구우면 훨씬 더 맛이 좋다.",
            "팬을 달궈 기름을 약간 발라 고기를 올려 굽다가 양념을 떠서 위에 올려 불 조절을 해 가면서 타지 않게 구워 준다.",
            "다 익으면 가위로 잘라 준다."
        ]
    }),
    createRecipe({
        title: "떡꼬치 소스",
        chef: "마카롱여사",
        category: "소스",
        imgUrl: "/images/riceCakeSkewer.png",
        videoUrl: "https://www.youtube.com/watch?v=SDt8I0V7BdY",
        sourceUrl: "",
        ingredients: [
            "가래떡"
        ],
        seasonings: [
            "설탕 1T",
            "고추기름 1T",
            "식용유 1T",
            "청주 1T",
            "고추장 1T",
            "케첩 2T",
            "마늘 1T",
            "물엿  4T",
            "간장 1t(생략)"
        ],
        steps: [
            "소스팬에 설탕 1T, 고추기름 1T, 식용유 1T, 청주 1T, 고추장 1T, 케첩 2T, 마늘 1T,  물엿  4T 넣어 바글바글 끓여 준다.",
            "끓기 시작하면 불을 줄이고 약불에 5분 정도 끓여 주면 된다. (식으면 걸쭉 해지니 너무 많이 끓이지 않는다)",
            "팬을 달궈 기름을 살짝 바르고 떡을 구워 준다.",
            "떡이 좀 딱딱하면 약불에 말랑하게 굽는다.",
            "나무젓가락이나 꼬챙이에 끼워 소스 바랄 약불에 지져 준다.",
            "가위로 옆면에 칼집을 재주면 양념이 들어가고 한입씩 베어먹기 좋다."
        ]
    }),
    createRecipe({
        title: "유자향 무피클",
        chef: "마카롱여사",
        category: "피클",
        imgUrl: "/images/citronWhiteRadishPickle.png",
        videoUrl: "https://www.youtube.com/watch?v=BkgrXgJVAXk",
        sourceUrl: "",
        ingredients: [
            "무 한 개 (1.3kg 정도)",
            "베트남 고추 8개",
            "유자청 5T"
        ],
        seasonings: [
            "물 500g",
            "흰 설탕 350g",
            "흰 식초 350ml",
            "천일염 1T"
        ],
        steps: [
            "무 한 개 (1.3kg 정도) 껍질을 제거해 준다. 쏨땀 채칼로 겉면을 잘라주면 예쁘다",
            "채칼을 이용해 얇게 썰어 준다. 두께를 얇게 하면 바로 먹을 수 있다.",
            "채 썬 무는 그릇에 담고 매운 베트남 고추 8개, 유자청 5T 넣어 준다.",
            "냄비에 물 500ml, 식초 350ml, 설탕 350g, 천일염 1T 넣어 끓여 준다.",
            "팔팔 끓인 피클 물을 무에 부어 12시간 정도 냉장 보관 후 먹는다."
        ]
    }),
    createRecipe({
        title: "소고기 장조림",
        chef: "마카롱여사",
        category: "장조림",
        imgUrl: "/images/jangjorim.png",
        videoUrl: "https://www.youtube.com/watch?v=j4VHEjTcR_k",
        sourceUrl: "",
        ingredients: [
            "소고기(홍두깨, 양지, 사태 모두 가능) 600g~1kg",
            "양파 1개",
            "대파 1개",
            "마늘 20알쯤",
            "통후추 1t",
            "식초 1~2T",
            "생강 엄지손톱 만한 크기",
            "다시마 손바닥 만한 거 한 장",
            "물 6컵(1200ml)"
        ],
        seasonings: [
            "고기 삶은 육수 600ml",
            "간장 150ml",
            "청주 3T",
            "미림 3T",
            "설탕 5T(각자 조절)",
            "마른 고추 2~3개(베트남 고추 말린 매콤한 고추 가능)",
            "혼합장 4T(집간장:참치액:액젓(멸치/까나리/꽃게) 1:1:1",
            "메추리알 250g",
            "꽈리고추 200g",
            "알 마늘 20알"
        ],
        steps: [
            "장조림용 고기 600g~1kg 찬물에 30분 이상 담가 핏물을 제거해 준다.",
            "양파 1개, 대파 1개 적당한 크기로 잘라 준다.",
            "핏물 뺀 고기는 씻어 냄비에 넣고 물 1.2리터 대파, 마늘, 양파, 생강, 다시마 한 장, 후추 조금 식초 1~2T 넣어 20분 이상 끓여 준다.",
            "고기에 간하지 않고 푹 무르게 삶아 주면 부드럽고 좋다.",
            "고기는 건져 결대로 쭉쭉 찢어 주고 육수는 걸러 준다.",
            "냄비에 고기 삶은 육수 600ml, 간장 150ml, 미림 3T, 청주 3T, 설탕 5T, 혼합장 4T, 매운 고추 3~4개 넣어 주면 좋다.",
            "삶은 달걀이나 메추리알 넣어 20분 정도 끓여 준다.",
            "꽈리고추는 적당한 크기로 잘라 준다.",
            "국물 자작하게 만들어 밥 비벼 먹어도 아주 좋다.",
            "꽈리고추, 알 마늘 20알 정도 넣어 10분 정도 끓여 주면 완성"
        ]
    }),
    createRecipe({
        title: "콩나물 볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/stir-friedBeanSprout.png",
        videoUrl: "https://www.youtube.com/watch?v=KuORt1cH7eM",
        sourceUrl: "",
        ingredients: [
            "콩나물 2봉지 600g",
            "대파 1개",
            "마늘 1T",
            "식용우 3T",
            "소금 한 꼬집"
        ],
        seasonings: [
            "맛간장 2T",
            "꽃게액젓 1T(까나리, 멸치 모두 가능",
            "고춧가루 1.5T",
            "참기름(또는 들기름) 1T",
            "통깨 조금"
        ],
        steps: [
            "콩나물 두 봉지 깨끗하게 씻어 물기 빼 준다.",
            "대파 1개 잘게 썰어 준다.",
            "마늘 1T 굵게 다져 준다.",
            "큰 냄비에 기름 3T, 다진 파, 다진 마늘, 콩나물 올려 준다.",
            "소금 한 꼬집 넣어 준다. 드르륵드르륵 다섯 번 갈기",
            "한 번 뒤집어 준다.",
            "맛간장 2T(없으면 간장 2T), 꽃게액젓 1T, ",
            "숨이 죽으면 중간에 뒤집어 준다.",
            "고춧가루 1.5T 넣어 볶아 준다.",
            "참기름 또는 들기름 1T 넣어 준다.",
            "마지막에 통깨 뿌려 주면 된다."
        ]
    }),
    createRecipe({
        title: "애호박덮밥",
        chef: "마카롱여사",
        category: "덮밥",
        imgUrl: "/images/riceWithZucchini.png",
        videoUrl: "https://www.youtube.com/watch?v=CBRElNhEV1w",
        sourceUrl: "",
        ingredients: [
            "애호박 1개",
            "양파 반 개",
            "대파 1개",
            "마늘 1T",
            "청양고추 2개",
            "소고기 300g(간장 2T, 설탕 1T, 후추 조금, 미림 1T)"
        ],
        seasonings: [
            "소금 약간",
            "간장 1T",
            "참치액 1T",
            "고춧가루 1T",
            "물엿 또는 올리고당 2T",
            "통깨 1T"
        ],
        steps: [
            "애호박은 잘게 깍둑썰어 준다.",
            "양파 반개 깍둑썰어 준다.",
            "대파 1개, 청양고추 2개, 마늘 3개 잘게 다져 준다.",
            "소고기 불고깃감 300g 썰어 준다.",
            "간장 2T, 참기름 1T, 미림 1T, 설탕 1T, 후추 조금 넣어 양념해 준다.",
            "팬을 달궈 기름 2T 넣어 양파, 대파, 마늘 볶다가 호박 넣고 소금을 약간 넣어 볶아 준다.",
            "간장 1T, 참치액 1T, 고춧가루 1T 넣어 볶아 준다.",
            "익으면 꺼내고 그 팬에 양념한 고기를 수분이 날아가게 볶아 준다.",
            "고기가 익으면 미리 볶은 애호박을 넣고 청양고추 물엿 또는 올리고당 2T, 통깨 넣어 주면 완성"
        ]
    }),
    createRecipe({
        title: "진미채 꿀 꽈리고추 간장조림",
        chef: "마카롱여사",
        category: "조림",
        imgUrl: "/images/DriedSquidChiliPeppersBoiledInSoySauce.png",
        videoUrl: "https://www.youtube.com/watch?v=qYb5c2QJit8",
        sourceUrl: "",
        ingredients: [
            "진미채 300g",
            "꽈리고추 400g"
        ],
        seasonings: [
            "간장 물(간장 5T, 미림 2T, 물 200ml)",
            "꿀 5T",
            "물엿 또는 올리고당 2T",
            "통깨 1T"
        ],
        steps: [
            "진미채는 적당한 크기로 잘라 준다.",
            "꽈리고추도 적당한 크기로 잘라 주고 훌훌 고추씨를 털어 준다.",
            "간장 5T, 미림 2T, 물 200ml 넣어 간장 물을 만들어 준다.",
            "팬에 기름 2T 두르고 꽈리고추 볶아 준다. 소금 살짝 뿌려 숨이 죽게 볶아 준다.",
            "볶은 후 그릇에 덜어 식혀 주고 꽈리 볶은 팬엔 기름 살짝 두르고 진미채를 볶다가 미리 섞어 놓은 간장 물을 부어 조려 준다.",
            "꿀 5T 넣어 준다. 꿀을 넣었을 때 훨씬 맛이 좋다.",
            "미리 볶아 놓은 꽈리고추를 넣어 볶아 준다.",
            "중불 이하에서 뭉근하게 조려 준다. (그래야 진미채가 말랑말랑합니다)",
            "물엿 또는 올리고당 2T 둘러 윤기를 내준다.",
            "간장 물이 어느 정도 줄어들면 통깨 뿌려 준다."
        ]
    }),
    createRecipe({
        title: "노각무침",
        chef: "마카롱여사",
        category: "무침",
        imgUrl: "/images/yellowishOverripeCucumberSalad.png",
        videoUrl: "https://www.youtube.com/watch?v=ozqfSjyWY64",
        sourceUrl: "",
        ingredients: [
            "노각 1.8kg(소금 2t, 설탕 2T, 식초 2T 절임)"
        ],
        seasonings: [
            "고춧가루 2T",
            "다진파 1T",
            "다진 마늘 1T",
            "다진 청양고추 1T",
            "식초 2T",
            "매실액 1T",
            "소금 0.5t",
            "설탕 1T",
            "통 깨 1T",
            "참기름 0.5T"
        ],
        steps: [
            "노각은 껍질을 벗겨 반 갈라 씨를 제거해 준다.",
            "0.2mm 두께로 썰어 소금 2t, 설탕 2T, 식초 2T 넣어 녹게끔 버무려 30분 정도 절여 주면 돼요.",
            "파 1T, 마늘 1T, 청양고추 1개 다져 준다.",
            "30분 절인 노각은 면포에 넣어 물기를 꼭 짜 준다.",
            "고춧가루 2T에 먼저 버무려 색을 입혀 준다.",
            "다진 파, 다진 마늘, 다진 청양고추, 식초 2T, 매실청 1T, 소금 0.5T, 설탕 1T, 통깨 넣어 버무려 준다.",
            "참기름은 먹기 전에 넣어 주면 좋다"
        ]
    }),
    createRecipe({
        title: "토마토소스 떡볶이",
        chef: "마카롱여사",
        category: "간식",
        imgUrl: "/images/tteokbokkiWithTomatoSauce.png",
        videoUrl: "https://www.youtube.com/watch?v=gWWwYIHQ6EI",
        sourceUrl: "",
        ingredients: [
            "떡볶이 떡 500g",
            "대파 1개",
            "어묵 150g",
            "비엔나소시지 한 줌"
        ],
        seasonings: [
            "물 250g",
            "설탕 2T",
            "고추장 크게 2T",
            "청정원 토마토스파게티 소스 250g"
        ],
        steps: [
            "떡볶이 떡 500g 물에 잠시 불려 준다.",
            "파 한 개 굵게 썰어 주세요.",
            "물 250g, 설탕 2T, 고추장 크게 2T, 청정원 토마토스파게티 소스 250g 넣어 끓여 준다.",
            "떡을 넣어 끓여 준다.",
            "어묵, 대파, 소시지 넣어 보글보글 끓여 준다.",
            "떡이 말랑말랑 익으면 완성"
        ]
    }),
    createRecipe({
        title: "어묵볶음(간장맛)",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/stir-friedFishCakeWithSoySauce.png",
        videoUrl: "https://www.youtube.com/watch?v=UMnRrXhaRnQ",
        sourceUrl: "",
        ingredients: [
            "얇은 어묵 300g",
            "대파 1개",
            "양파 1개",
            "청양고추 2개",
            "마늘 3~4쪽"
        ],
        seasonings: [
            "설탕 1t",
            "식용유 1T",
            "미림 1T",
            "간장 1T",
            "참치액 1t",
            "물엿 2T",
            "고추기름 1T",
            "참기름 1t",
            "통깨 약간"
        ],
        steps: [
            "대파 1개 또는 쪽파 2개 송송 다져 준다.",
            "양파 중간 크기 1개 썰어 준다.",
            "매운 청양고추 2개 썰어 준다.",
            "마늘 3~4쪽 다져 준다.",
            "얇은 어묵 300g 알맞은 크기로 잘라 준다.",
            "설탕 1t, 식용유 1T, 미림 1T, 간장 1T, 참치액 1t 넣어 양념장을 만든다.",
            "양념에 양파 마늘을 먼저 볶다가 어묵을 넣어 중불에서 볶아 준다.",
            "파, 청양고추 넣고 물엿 2T 넣어 볶아 준다.",
            "고추기름 1T, 참기름 1t 넣어 주면 된다.",
            "마지막에 통깨 뿌려 주면 완성"
        ]
    }),
    createRecipe({
        title: "무생채",
        chef: "마카롱여사",
        category: "생채",
        imgUrl: "/images/shreddedDaikon.png",
        videoUrl: "https://www.youtube.com/watch?v=4FWNdQI4G9M",
        sourceUrl: "",
        ingredients: [
            "무 1.4kg(소금 1t, 설탕 2T)"
        ],
        seasonings: [
            "다진 파 1개",
            "다진 마늘 1T",
            "꽃게액젓(까나리, 멸치) 3T",
            "설탕 1T",
            "고춧가루 2T",
            "통깨 1T"
        ],
        steps: [
            "무는 깨끗이 씻어 껍질 벗겨 준다.",
            "채칼을 이용해 일정한 굵기로 썰어 준다.",
            "채 썬 무는 소금 1t, 설탕 2T 넣어 절여 준다.",
            "중간에 뒤적뒤적 해주면 좋다.",
            "대파 1개 잘게 다져 준다.",
            "마늘 3알(1T) 다져 준다.",
            "30분 절인 무는 물기를 따라 버려 준다.",
            "다진 마늘 1T, 다진 파 1개, 꽃게액젓(까나리, 멸치) 3T, 설탕 1T, 고춧가루 2T 넣어 버무려 준다.",
            "양념이 잘 스며들게 버무려 준다.",
            "통깨 1T 넣어주면 완성"
        ]
    }),
    createRecipe({
        title: "알 배추 겉절이",
        chef: "마카롱여사",
        category: "겉절이",
        imgUrl: "/images/freshCabbageKimchi.png",
        videoUrl: "https://www.youtube.com/watch?v=vnhPD2Bn2L4",
        sourceUrl: "",
        ingredients: [
            "얄배추 2kg(소금 3T, 물 200ml)",
            "부추(쪽파) 100g"
        ],
        seasonings: [
            "양파 1/4쪽",
            "생강 한톨",
            "마늘 3T(10알)",
            "홍 청양고추 4~5개",
            "꽃게액젓 5T",
            "매실청 2T",
            "흰밥 2T",
            "냉동 굴 150g",
            "고춧가루 6T + 3T",
            "통깨 듬뿍"
        ],
        steps: [
            "알 배추는 밑동을 자르고 한 장씩 켜켜이 큰 볼에 담고 굵은소금 3T 나눠가며 중간중간 뿌리고 남은 소금은 물 200ml 넣어 위에 솔솔 뿌려 준다.",
            "2시간 동안 무거운 걸 눌러 중간에 뒤집어 가며 절여 준다.",
            "양파 1/4개, 마늘 3T(10알), 생강 한 톨, 홍 청양고추 4~5개, 꽃게액젓 5T(까나리, 멸치), 매실청 2T, 흰밥 2T, 냉동 굴 150g 믹서기에 넣어 곱게 갈아 준다.",
            "간 양념은 큰 볼에 담고 고춧가루 6T 넣어 섞어 준다. 시간이 지날수록 색이 빨개진다.",
            "두 시간 절인 배추는 흐르는 물에 2~3번 씻어 채반에 올려 물기를 빼 준다.",
            "큰 볼에 물기 뺀 배추를 담고 부추 한 줌 5cm 길이로 잘라 준다.",
            "고춧가루 3T 뿌려 먼저 섞어 수분을 잡아 준 다음 간 양념을 부어 치대듯 비벼 준다.",
            "마지막 통깨 듬뿍 뿌려 주면 된다."
        ]
    }),
    createRecipe({
        title: "고추기름",
        chef: "마카롱여사",
        category: "소스",
        imgUrl: "/images/chiliOil.png",
        videoUrl: "https://www.youtube.com/watch?v=s1cwvnQgHB8",
        sourceUrl: "",
        ingredients: [
            "굵은 대파 흰 대만 2개"
        ],
        seasonings: [
            "식용유 400ml",
            "고춧가루 300ml"
        ],
        steps: [
            "굵은 대파 흰 대만 2개 속심을 제거하고 흰 대 겉 부분만 길게 썰어 준다.",
            "팬에 식용유 400ml 넣어 대파 흰 대부분 넣어 끓여 준다.",
            "중불에서 흰 대부분이 노릇해지면 불을 끄고 고춧가루 300ml 넣어 휘저어 준 다음 20분 정도 뒀다가 커피 필터에 기름만 걸러 사용하세요."
        ]
    }),
    createRecipe({
        title: "순두부 페이스트",
        chef: "마카롱여사",
        category: "소스",
        imgUrl: "/images/softTofuPaste.png",
        videoUrl: "https://www.youtube.com/watch?v=s1cwvnQgHB8",
        sourceUrl: "",
        ingredients: [
            "다진 마늘 100g",
            "고추기름 300ml",
            "간 돼지목살 400g",
            "다진 대파 3대",
            "고춧가루 300ml"
        ],
        seasonings: [
            "천일염 3T",
            "간장 3T",
            "참치액 2T",
            "후추 1t",
            "물 2T"
        ],
        steps: [
            "팬에 고추기름 300ml 넣고 간 돼지고기 목살, 다진 파 다진 마늘 넣어 고기가 익도록 볶아 준다.",
            "고기가 충분하게 익으면 불을 끄고 5분 정도 있다가 고춧가루 300ml 넣어 준다.",
            "물 2T, 간장 3T, 참치액 2T, 천일염 3T, 후추 1t 넣어 소금이 녹게끔 약불에서 섞어 준다.",
            "완전하게 식힌 다음 소독한 병에 넣어 냉동 보관하세요(6개월)."
        ]
    }),
    createRecipe({
        title: "순두부 찌개",
        chef: "마카롱여사",
        category: "찌개",
        imgUrl: "/images/softTofuKrStew.png",
        videoUrl: "https://www.youtube.com/watch?v=s1cwvnQgHB8",
        sourceUrl: "",
        ingredients: [
            "순두부 2봉",
            "육수(멸치, 다시마 우린 물) 200ml(1봉 100ml)"
        ],
        seasonings: [
            "대파 한개",
            "순두부 페이스트  듬뿍 2T"
        ],
        steps: [
            "대파 1개 다져 준다.",
            "순두부 2봉 냄비에 넣고 육수 200ml 넣어 끓여 준다.",
            "수두부 양념장 크게 2T 넣어 보글보글 끓여 준다.",
            "끓기 시작하면 다진 대파와 달걀 3개 넣어 익혀 준다."
        ]
    }),
    createRecipe({
        title: "설렁탕집 석박지",
        chef: "조샘→마카롱여사",
        category: "석박지",
        imgUrl: "/images/sheetOfStone.png",
        videoUrl: "https://www.youtube.com/watch?v=Mt2izRHPZME",
        sourceUrl: "",
        ingredients: [
            "무 4kg(설탕 2T, 꽃소금 2T)",
            "쪽파 200g"
        ],
        seasonings: [
            "마른고추 10개(또는 고춧가루 3T)",
            "양파 1개",
            "배 중간 크기 1개",
            "생강 두 톨",
            "마늘 15알",
            "새우젓 4T",
            "꽃게액젓 4T(까나리, 멸치)",
            "흰 밥 6T",
            "요구르트 한 병(65ml)",
            "고춧가루 10T",
            "설탕 1T",
            "꽃소금 1T",
            "통깨 적당히"
        ],
        steps: [
            "무는 깨끗이 씻어 지저분한 데는 채칼로 다듬어 준다.",
            "납작납작하게 일정한 두께로 썰어 준다.",
            "큰 볼에 무를 담고 설탕 2T, 소금 2T 뿌려 조물조물 해 준다. 2시간 정도 절여 준다.",
            "마른 고추 10개 젓은 면포로 닦고 가위로 잘라 물에 불려 준다.",
            "마른 고추를 불려 믹서기에 갈아 김치를 만들면 색도 곱고 맛이 좋다.",
            "양파, 배, 생강, 마늘, 새우젓, 액젓, 불린 고추, 흰밥 믹서기에 곱게 갈아 준다.",
            "절인 무는 씻지 말고 채반에 물기를 빼 준다.",
            "간 양념에 야쿠르트 1병 넣어 준다.",
            "절여서 물기 뺀 무에 고춧가루를 미리 버무려 색을 입히세요.",
            "무 쪽파 넣어 버무려 준다.",
            "설탕 1T, 소금 1T를 넣고 마지막 통깨 넣어 버무려 준다.",
            "실온에 하루 정도 익히고 냉장고에 3~4일 정도 숙성했다가 먹으면 가장 맛나요."
        ]
    }),
    createRecipe({
        title: "맛김치",
        chef: "마카롱여사",
        category: "김치",
        imgUrl: "/images/deliciousKimchi.png",
        videoUrl: "https://www.youtube.com/watch?v=XA_gGywv0OA",
        sourceUrl: "",
        ingredients: [
            "배추 3kg 1포기(물 1리터, 소금 200ml)",
            "육수(다시마 손바닥 크기 한 장, 멸치 한 줌, 건새우 2T, 물 500ml)",
            "쪽파 200g"
        ],
        seasonings: [
            "배 반 개",
            "양파 1개",
            "생강 두 쪽",
            "마늘 100g",
            "새우젓 3T",
            "꽃게액젓 5T(까나리, 멸치)",
            "매실액 2T",
            "육수 300ml",
            "찹쌀가루 2T",
            "고춧가루 300ml",
            "통깨 듬뿍"
        ],
        steps: [
            "배추는 밑동을 파내고 한 장씩 뜯어 먹기 좋은 크기로 잘라 준다",
            "배추 한 장 반 잘라 줄기와 잎을 함께 먹을 수 있게 잘라 준다.",
            "소금 100ml는 사이사이 뿌려주고 나머지는 물에 녹여 골고루 적셔 준다.",
            "두 시간 동안 뒤적뒤적 위치 바꿔가며 절여주면 좋다.",
            "다시마 손바닥 크기 한 장, 멸치 한 줌, 건새우 2T, 물 500ml 육수 내 준다.",
            "냄비에 물 500ml 끓기 시작하면 멸치, 다시마, 새우 넣어 불을 끄고 30분 이상 육수를 우린다.",
            "쪽파 200g 다듬어 5cm 간격으로 잘라 준다.",
            "배 반 개, 양파 1개, 생강 두 쪽, 마늘 100g, 새우젓 3T, 꽃게액젓 5T(까나리, 멸치), 매실액 2T 믹서기에 곱게 갈아 준다.",
            "육수 우린 물 300ml에 찹쌀가루 2T 넣어 찹쌀 풀을 쑤어 준다.",
            "눋지 않게 저어가며 풀을 만들어 식혀 준다.",
            "간 양념에 찹쌀 풀, 고춧가루 300ml 넣어 잘 섞어 준다. (미리 만들어 놓으면 마늘의 아린 맛도 줄어들고 고춧가루가 양념에 풀어지면서 곱게 물이 들어 색이 예쁘다)",
            "두 시간 절인 배추는 흐르는 물에 2~3번 씻어 물기를 빼준다.",
            "큰 그릇에 물기 뺀 배추와 쪽파, 양념 넣어 버무려 준다.",
            "양념에 골고루 치대듯 비벼 준다.",
            "통깨 듬뿍 넣어 하루 동안 실온 숙성하고 냉장고에 3일 보관 후 먹으면 딱 알맞게 익어 맛이 좋다."
        ]
    }),
    createRecipe({
        title: "매운어묵볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/spicyStir-friedFishCake.png",
        videoUrl: "https://www.youtube.com/watch?v=yLKtybFuRpI",
        sourceUrl: "",
        ingredients: [
            "어묵 400g",
            "쪽파 2~3개",
            "청양고추 2~3개"
        ],
        seasonings: [
            "간장 2T",
            "마늘 1T",
            "미림 1T",
            "참치액 1T",
            "고춧가루 2T",
            "참기름 1T",
            "설탕 1t",
            "통깨 1T",
            "물 70ml",
            "물엿을 2T",
            "통깨 1T"
        ],
        steps: [
            "쪽파를 2~3개 잘게 썰어 준다.",
            "청양고추 2~3개 잘게 썰어 준다.",
            "양념장(간장 2T, 마늘 1T 미림 1T, 참치액 1T, 고춧가루 2T, 참기름 1T, 설탕 1t, 통깨 1T)",
            "팬에 고추기름 또는 기름 2T 두르고 파와 고추를 볶다가 어묵 400g 넣어 볶아 준다.",
            "양념장과 물 70ml 넣어 볶아 준다.",
            "수분이 줄어 들면 물엿을 2T 넣어 윤기를 내주고 통깨로 마무리"
        ]
    }),
    createRecipe({
        title: "우엉조림",
        chef: "마카롱여사",
        category: "조림",
        imgUrl: "/images/braisedBurdock.png",
        videoUrl: "https://www.youtube.com/watch?v=yLKtybFuRpI",
        sourceUrl: "",
        ingredients: [
            "우엉 400g~500g"
        ],
        seasonings: [
            "식용유 2T",
            "설탕 2T",
            "미림 2T",
            "간장 2T",
            "물엿 2T",
            "통깨 조금",
            "참기름 1T"
        ],
        steps: [
            "우엉은 흙을 솔로 닦고 필러 또는 칼로 껍질을 벗겨 좀 굵게 채 썰어 준다.",
            "채 썬 우엉은 물에 담가 2~3번 갈변된 검은 물을 빼주고 채반에 올려 물기를 쏙 뺀다",
            "팬을 달궈 기름 2T 넣고 물기 제거한 우엉을 볶아 준다.",
            "설탕 2T 넣어 단맛을 먼저 입혀준다",
            "미림 2T 넣어 볶아 준다.",
            "간장 2T 넣어 볶아 준다.",
            "중불 정도에서 뭉근하게 볶다가 수분이 줄어들면 물엿 2T 넣어 볶아 준다.",
            "뭉근하게 좀 오래 볶아야 쫀듯하면서 맛이 좋다.",
            "우엉이 진한 색을 띠면 참기름 약간 통깨 넣어 마무리한다."
        ]
    }),
    createRecipe({
        title: "잡채",
        chef: "마카롱여사",
        category: "밑반찬",
        imgUrl: "/images/Japchae.png",
        videoUrl: "https://www.youtube.com/watch?v=joey-y1aHqg",
        sourceUrl: "",
        ingredients: [
            "자른 당면 300g",
            "부추 한 줌",
            "노랑, 빨강 피망 한 개씩",
            "소고기  200g(간장 1T, 참기름 1T, 설탕 1T, 후추 조금 밑간)",
            "새송이버섯 3개"
        ],
        seasonings: [
            "설탕 54g",
            "간장 81g",
            "식용유 36g",
            "참치액 1T"
        ],
        steps: [
            "채소는 모두 5cm 길이로 채 썰어 준다.",
            "소고기는 간장, 참기름, 설탕, 후추 간해 준다.",
            "자른 당면은 미리 찬물에 30분 정도 불려 놓는다.",
            "팬에 기름을 조금 둘러 양파를 먼저 볶는다. 한숨 죽을 정도만 볶아 꺼내 펼쳐 식힌다.",
            "기름 조금 새송이버섯에 소금 간 조금 해서 숨이 죽게 볶은 후 꺼내 펼쳐 식힌다.",
            "기름 조금 파프리카에 소금 조금 뿌려 살짝 볶아 꺼낸 후 펼 쳐 식힌다.",
            "고기는 젓가락으로 저어 뭉치지 않게 볶는다.",
            "익힌 고기는 꺼낸 후 양념장을 붓고 다른 냄비에 불린 당면을 삶는다.",
            "끓는 물에 3~4분 삶아(80%만 삶아 준다) 찬물에 한 번 씻어 체에 건지세요.",
            "잡채 소스와 당면을 넣어 소스가 줄어들 때까지 볶아준다.",
            "소스가 완전히 줄어들면 생부추를 넣어 뜨거운 열기에 의해 숨이 죽게 섞어주고 당면에 소스가 잘 스며들게 볶아주면 식어도 불지 않고 촉촉하니 맛이 좋다.",
            "미리 볶은 재료를 넣어 불을 줄이고 잘 섞어 준다. 통깨를 넣어 잘 버무려 준다."
        ]
    }),
    createRecipe({
        title: "간장 양념 닭튀김",
        chef: "마카롱여사",
        category: "튀김",
        imgUrl: "/images/friedChickenWithSoySauce.png",
        videoUrl: "https://www.youtube.com/watch?v=r25LYNT7LEw",
        sourceUrl: "",
        ingredients: [
            "윙 또는 닭봉 500~600g",
            "연근",
            "깻잎"
        ],
        seasonings: [
            "전분 2T(감자, 옥수수)",
            "간장 1T",
            "설탕 1T",
            "미림 1T",
            "물 1T",
            "물엿 1T",
            "베트남 고추 3~4개"
        ],
        steps: [
            "닭은 뜨거운 물을 부어 한두 번 씻어 키친타월로 꾹꾹 눌러 물기 제거해 준다.",
            "물기 제거 후 전분 가루 발라 꾹꾹 눌러 스며들게 10분 정도 뒀다가 튀긴다.",
            "팬에 기름 3T 넣고 윙 올려 중간 불에 냄비 뚜껑을 닫고 15분 정도 뒤집어 가며 튀겨 준다.",
            "불 조절은 각자 모두 다르므로 바닥 쪽이 노릇하게 익으면 뒤집어 뚜껑 닫고 튀겨 주면 된다.",
            "뚜껑에 있는 물기를 닦아주면 덜 튄다.",
            "팬에 기름 추가하지 마시고 두 번에 나눠 튀겨 준다. 저유로 튀기는 방법인데 기름이 그대로 남는다.",
            "튀긴 닭은 식힘 망에 올려 기름을 빼 준다.",
            "연근이나 깻잎을 같이 튀겨도 아주 좋다.",
            "튀기고 남은 기름은 스크레이퍼를 이용해 꺼내 준다.",
            "간장 1T, 설탕 1T, 미림 1T, 물 1T, 물엿 1T, 베트남 고추 3~4개 부셔 바르르 끓이다가 튀긴 닭을 넣어 양념이 잘 묻어나게 볶아 준다.",
            "마지막 통깨  실파 다진 거 넣어서 먹으면 된다."
        ]
    }),
    createRecipe({
        title: "톡쏘는 물김치",
        chef: "지호할매→마카롱여사",
        category: "물김치",
        imgUrl: "/images/kimchiWithWater.png",
        videoUrl: "https://www.youtube.com/watch?v=-ZADLipMxZM",
        sourceUrl: "",
        ingredients: [
            "알 배추 900g~1kg",
            "오이 3개",
            "홍고추 3개",
            "마늘 10알",
            "생강 엄지손톱크기",
            "쪽파 100g"
        ],
        seasonings: [
            "천일염 60g(3T)",
            "고춧가루 3T",
            "물 1컵(200ml)",
            "찹쌀가루 3T",
            "물 3L",
            "소금 1T",
            "설탕 2T",
            "뉴수가 1t(청정원 그린스위트)"
        ],
        steps: [
            "알 배추는 한 장씩 뜯어 흐르는 물에 씻어 물기 빼 준다.",
            "물기 제거한 알 배추는 반 잘라 줄기와 잎을 적당한 크기로 자른다.",
            "오이 3개 반 잘라 가운데 씨 부분을 도려내고 어슷 썰어 준다. 물결 칼을 사용해도 좋다.",
            "배추와 오이에 소금 2T 넣어 절여 준다. 가벼운 용기에 담아 훌훌 섞어준다. 절이는 중간에 섞어주면 좋다.",
            "홍고추 3개 씨를 제거하고 채 썰어 준다.",
            "마늘 10개 편 썰고 생강 한 톨 편 썰어 준다.",
            "쪽파 100g 5cm 길이로 썰어 준다.",
            "물 200ml에 고춧가루 3T 불려준다.",
            "찹쌀가루 3T, 물 1.5L 저어가며 팔팔 끓여 준다.",
            "팔팔 끓으면 소금 1T, 설탕 2T, 뉴수가 1t 넣어 섞어 준다.",
            "뜨거울 때 생수 1.5L 넣어 준다.",
            "물 온도가 대충 50도 정도 될거예요. 절인 배우와 오이에 부어 준다. (씻지 않음)",
            "채 망에 불린 고춧물을 부어 적셔가며 풀어 준다. 입자가 큰 고춧가루 건더기는 건져 낸다.",
            "편 마늘, 편 생강, 쪽파 넣어 주방에 15시간 숙성해 준다",
            "15시간이 지나면 냉장 보관 해놓고 하루 정도 있다 먹는다."
        ]
    }),
    createRecipe({
        title: "궁채무침",
        chef: "마카롱여사",
        category: "무침",
        imgUrl: "/images/seasonedCeltuce.png",
        videoUrl: "https://www.youtube.com/watch?v=jcuBDVFWSo8",
        sourceUrl: "",
        ingredients: [
            "불린 궁채 400g",
            "황설탕 2T",
            "식초 2T",
            "소금 2t",
            "청주 2T"
        ],
        seasonings: [
            "진간장 2T",
            "황설탕 2T",
            "고추기름 2T",
            "다진 마늘 1T",
            "참기름 1T",
            "통깨 1T"
        ],
        steps: [
            "끓는 물에 청주 2T, 불린 궁채 400g 넣어 1분 정도 데치기",
            "데친 궁채 찬물에 헹군 뒤 체에 밭쳐 물기 제거하기",
            "궁채 먹기 좋게 썰기",
            "궁채에 황설탕 2T, 식초 2T, 소금 2t 넣어 버무린 뒤 40분에서 1시간 정도 절이기",
            "절인 궁채 수분 제거한 뒤 고추기름 2T, 진간장 2T, 설탕 2T, 다진 마늘 1T 넣어 버무리기"
        ]
    }),
    createRecipe({
        title: "시금치 겉절이",
        chef: "마카롱여사",
        category: "겉절이",
        imgUrl: "/images/freshSpinach.png",
        videoUrl: "https://www.youtube.com/watch?v=rvYR8FbVn18",
        sourceUrl: "",
        ingredients: [
            "섬초 200g"
        ],
        seasonings: [
            "간장 1T",
            "설탕 1T",
            "식초 1T",
            "참기름 1T",
            "고춧가루 1T",
            "간 통께 1T"
        ],
        steps: [
            "찬물에 담가 흙모래를 털어내고 깨끗하게 씻어 물기 빼 준다.",
            "간장 1T, 설탕 1T, 식초 1T, 참기름 1T, 고춧가루 1T 넣어 조물조물 무쳐 주면 새콤달콤하니 맛이 좋다."
        ]
    }),
    createRecipe({
        title: "시금치 나물",
        chef: "마카롱여사",
        category: "나물",
        imgUrl: "/images/spinachSalad.png",
        videoUrl: "https://www.youtube.com/watch?v=rvYR8FbVn18",
        sourceUrl: "",
        ingredients: [
            "포항초 200g"
        ],
        seasonings: [
            "혼합장 1T(국간장:참치액:액젓)",
            "참기름 1t",
            "통깨 1T"
        ],
        steps: [
            "찬물에 담가 흙모래를 털어내고 씻어 준다.",
            "끓는 물에 소금 약간 넣어 10초 삶고 찬물에 헹궈 물기 꼭 짜 준다.",
            "참기름 1t 통깨 반은 부숴 넣고 반은 통으로 넣어 조물조물 무쳐 준다."
        ]
    }),
    createRecipe({
        title: "브로콜리 볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/broccoliGreens.png",
        videoUrl: "https://www.youtube.com/watch?v=vQbBAT6LhI0",
        sourceUrl: "",
        ingredients: [
            "베이비브로콜리 400g"
        ],
        seasonings: [
            "굵게 다진마늘 6알",
            "올리브오일 3T",
            "페페론치노 5~6개",
            "소금"
        ],
        steps: [
            "브로콜리니는 끓는 물에 소금 넣어 삶아 얼음물에 담가 물기를 완벽하게 제거한다.",
            "물기 제거한 브로콜리니는 심지가 굵은 건 반 갈라 볶아 준다.",
            "올리브오일에 마늘 페페론치노를 볶다가 물기 뺀 브로콜리니를 충분하게 오일에 코팅되게 볶아주면 약간 매콤하면서 정말 고소하니 맛이 좋다."
        ]
    }),
    createRecipe({
        title: "새송이버섯볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/stir-friedPineMushrooms.png",
        videoUrl: "https://www.youtube.com/watch?v=vQbBAT6LhI0",
        sourceUrl: "",
        ingredients: [
            "굵은 새송이버섯 5~6개"
        ],
        seasonings: [
            "올리브오일 1T",
            "맛간장 1T",
            "화이트 발사믹소스 1T",
            "물엿 2T"
        ],
        steps: [
            "굵은 새송이버섯 5~6개 굵게 통통하게 썰어 칼집을 내준다.",
            "팬을 달궈 올리브오일 1T 넣어 버섯을 노릇하게 굽는다.",
            "맛간장 1T, 화이트 발사믹소스 1T, 물엿 2T 넣어 수분을 날리듯 뒤집어 가면서 볶아 준다.",
            "칼집 사이사이 충분하게 소스가 스며들어 맛이 좋은 거 같아요."
        ]
    }),
    createRecipe({
        title: "제육볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/stir-friedSpicyPork.png",
        videoUrl: "https://www.youtube.com/watch?v=T4JPNEm3MJw",
        sourceUrl: "",
        ingredients: [
            "돼지 뒷다리살 600g",
            "다진 대파 1개",
            "양파 1개",
            "알마늘 15알"
        ],
        seasonings: [
            "후추 조금",
            "설탕 1T",
            "미림 1T",
            "매실청 1T",
            "간장 2T",
            "참기름 1T",
            "고추장 2T",
            "고춧가루 1T",
            "생강술 1T",
            "물엿 2T",
            "마늘 1T"
        ],
        steps: [
            "대파 큰 거 한 개 송송 썰어 준다.",
            "양파 1개, 마늘 1T 다져 준다.",
            "돼지고기에 후추 뿌리고 나머지 양념을 섞어 조물조물해 준다.",
            "팬을 달궈 기름 1T 정도에 양파 알마늘을 설컹거리게 볶아 준다. (50% 정도만 익혀 준다)",
            "볶은 양파, 마늘을 꺼내고 그 팬에 양념한 고기를 볶아 준다.",
            "고기는 볶으면서 풀어 가면서 볶아야지 살코기가 부드러워요.",
            "다진 대파를 넣어 볶다가 다 익으면 먼저 익힌 양파와 마늘을 섞어 통깨 뿌려 주면 완성"
        ]
    }),
    createRecipe({
        title: "굴무침",
        chef: "마카롱여사",
        category: "무침",
        imgUrl: "/images/seasonedOysters.png",
        videoUrl: "https://www.youtube.com/watch?v=BjNHAzikLag",
        sourceUrl: "",
        ingredients: [
            "생굴 450g",
            "무 340g(설탕 1T, 소금 1t, 식초 2T)",
            "미나리 110g"
        ],
        seasonings: [
            "청양고추 1개",
            "다진 마늘 1T",
            "꽃게액젓 2.5T",
            "생강즙 1t",
            "미림 1T",
            "참치액 1t",
            "설탕 1T",
            "고춧가루 3T",
            "물엿 2T",
            "통깨 2T "
        ],
        steps: [
            "무 340g 나박나박 썰어 설탕 1T 소금 1t 식초 2T 넣어 조물조물 절여 준다.",
            "미나리 110g 4cm 길이로 청양고추 1개 잘게 다져 준다.",
            "생굴은 무즙을 갈아 천일염 1T 넣어 나무젓가락 같은 걸로 휘저어 주면 무즙이 굴에 붙어 있는 이물질을 깨끗하게 흡수한다.",
            "굴 맛이 빠져나가지 않게 손으로 한 개씩 흐르는 물에 씻어주면 깨끗하다.",
            "물기를 잘 빼서 미나리 절인 무에 소량의 고춧가루를 먼저 조금 뿌려 양념을 섞어 비빈 후 물기 뺀 굴을 넣어 살살 버무려 준다.",
            "통깨로 마무리"
        ]
    }),
    createRecipe({
        title: "굴전",
        chef: "마카롱여사",
        category: "전",
        imgUrl: "/images/oysterPancake.png",
        videoUrl: "https://www.youtube.com/watch?v=BjNHAzikLag",
        sourceUrl: "",
        ingredients: [
            "생굴 350g",
            "미나리 60g",
            "쪽파  3~4줄기",
            "청양고추 1개"
        ],
        seasonings: [
            "달걀 4개",
            "소금 약간"
        ],
        steps: [
            "미나리 60g 송송 잘라 준다. 청양고추 1개 다져 준다. 쪽파 3~4줄기 송송 잘라 준다.",
            "달걀 4개 깨서 소금 약간 넣어 풀어 준다.",
            "다진 파, 다진 청양고추 넣어 섞어 준다.",
            "굴은 부침가루 발라 훌훌 털어 준다.",
            "달걀물에 넣어 숟가락으로 한 알씩 똑 떠서 부쳐 준다."
        ]
    }),
    createRecipe({
        title: "맛간장",
        chef: "명란샘→마카롱여사",
        category: "소스",
        imgUrl: "/images/flavoredSoySauce.png",
        videoUrl: "https://www.youtube.com/watch?v=AeqVDlf7Gro",
        sourceUrl: "",
        ingredients: [
            "샘표 양조간장 501 또는 701 2L",
            "설탕 900g",
            "맛술 2컵(400cc)",
            "청주 1컵(200cc)",
            "건고추 3개",
            "건표고버섯 3개",
            "다시마 20cm 크기 1장"
        ],
        seasonings: [
            "편 마늘 60g",
            "편 생강 30g",
            "통후추 1큰술",
            "채 썬 양파 500g",
            "얇게 썬 당근 120g",
            "청주 150cc",
            "생수 150cc",
            "얇게 썬 사과 1개",
            "얇게 썬 레몬 1개"
        ],
        steps: [
            "채소 육수 재료 모두 바닥이 두꺼운 냄비에 넣고 뚜껑을 덮고 약불로 은근히 25분 정도 졸여서 체에 밭친다. (완성된 채소 육수 250~300cc 나와야 함)",
            "냄비에 채소 육수 250cc, 샘표 701 간장, 설탕, 맛술, 청주, 건고추, 건표고버섯, 다시마를 넣고 50분 끓인다. (처음에 강불. 끓어오르면 약불로 줄이고 뚜껑을 덮는다)",
            "2번이 완성되면 썰어놓은 사과와 레몬을 넣어 뚜껑을 덮고 5분 후 불을 끈다.",
            "완성된 간장은 12시간 이상 서늘한 그늘에 그대로 두었다가 고운체에 거른다.",
            "병에 넣어 냉장고 보관. (조림, 볶음, 무침, 찜등에  사용) [냉장 보관 6개월]"
        ]
    }),
    createRecipe({
        title: "생강술",
        chef: "마카롱여사",
        category: "소스",
        imgUrl: "/images/gingerLiquor.png",
        videoUrl: "https://www.youtube.com/watch?v=kZ_97Xfqw2A",
        sourceUrl: "",
        ingredients: [
            "생강 200g",
            "백화수복 500ml"
        ],
        seasonings: [
        ],
        steps: [
            "생강은 마디를 똑 부러뜨려 물에 담궈 잠시 불려 흙을 씻어 준다.",
            "숟가락 끝부분을 이용해 껍질을 벗겨 준다.",
            "껍질 제거한 생강은 물기 제거 후 편 썰어 준다.",
            "썰어 놓은 생강, 청주 또는 소주 500ml 넣어 갈아준다.",
            "채 망에 즙만 걸러 준다.",
            "건더기는 설탕과 동량으로 비벼 냉장 보관 해 놓고 고기 요리할 때 사용하면 된다."
        ]
    }),
    createRecipe({
        title: "쯔유",
        chef: "마카롱여사",
        category: "소스",
        imgUrl: "/images/tzuyu.png",
        videoUrl: "https://www.youtube.com/watch?v=xrXJPY9ZB30",
        sourceUrl: "",
        ingredients: [
            "육수(마른표고 10개, 다시마 30cm, 물 1L)",
            "손질한 훈제멸치 50g(내장 제거) 또는 가쓰오부시 50g",
            "대파 20cm",
            "양파 반개",
            "생강 슬라이스 2조각",
            "무 2cm 반 도막"
        ],
        seasonings: [
            "청주 1컵",
            "미림 2컵",
            "간장 2컵",
            "설탕 0.5컵"
        ],
        steps: [
            "정수 물에 건표고, 다시마 4시간 우린다.",
            "팬을 달궈 기름 없이 무, 생강, 대파, 양파 노릇하게 굽는다.",
            "다시마, 표고 우린 물에 구운 대파, 양파, 무, 생강 불에 올려 끓기 시작하면 다시마는 건져 낸다.",
            "훈제 멸치 넣어 약불에 20분 뭉근하게 끓인다.",
            "면보에 육수를 거른다. (2컵 정도 나옴)",
            "미림, 청주을 센 불에 끓여 알코올 성분만 날려주세요.",
            "육수 2컵, 미림, 청주, 간장 2컵, 설탕 0.5컵 넣어 우르르 끓으면 식혀 병에 넣어 냉장 보관",
            "냉장 보관 2~3주",
            "메밀소바 2:1(물 2:쯔유 1)",
            "스끼야끼, 간단한 비빔면 등 활용"
        ]
    }),
    createRecipe({
        title: "콜라비 피클",
        chef: "마카롱여사",
        category: "피클",
        imgUrl: "/images/ColabiPickles.png",
        videoUrl: "https://www.youtube.com/watch?v=48UFXiq7dSc",
        sourceUrl: "",
        ingredients: [
            "콜라비 2개",
            "청양고추 5개"
        ],
        seasonings: [
            "물 500ml",
            "설탕 500ml",
            "식초 500ml",
            "소금 1T",
            "피클링스파이스 0.5T"
        ],
        steps: [
            "콜라비는 깨끗이 씻어 칼로 줄기 제거한 부분을 깎아 준 다음 필러를 이용해 껍질을 제거한다.",
            "껍질 벗긴 콜라비는 1cm 두께로 잘라 깍두기 모양으로 썰어 준다.",
            "청양고추 5개 송송 썰어 준다.",
            "물 500ml, 설탕 500ml 동량을 냄비에 넣어 끓여 준다.",
            "물이 끓기 시작하면 식초 500ml, 소금 1T, 피클링스파이스 0.5T 넣어 5분간 끓여 준다.",
            "피클링스파이스 향이 올라오면 불을 끄고 끓는 물을 콜라비에 부어 준다.",
            "하루 정도 실온에 뒀다가 냉장 보관"
        ]
    }),
    createRecipe({
        title: "무말랭이무침",
        chef: "명란샘→마카롱여사",
        category: "무침",
        imgUrl: "/images/driedRadishSalad.png",
        videoUrl: "https://www.youtube.com/watch?v=UtaafNfhTtQ",
        sourceUrl: "",
        ingredients: [
            "말린무 120g",
            "쪽파 5줄기",
            "청양고추 1개"
        ],
        seasonings: [
            "고춧가루 6T",
            "올리고당 100ml",
            "꽃게액젓 2T(멸치, 까나리)",
            "맛간장 3T",
            "마늘 2T",
            "생강 1t",
            "매실액 1T",
            "통깨 2T ",
            "육수 100ml"
        ],
        steps: [
            "말린 무는 약간 뜨거운 물을 부어 간장1T, 설탕 1T 넣어 15분 이상 불리면 냄새없이 좋다.",
            "물에 오래 담그면 무 맛있는 맛이 모두 빠진다. 살짝만 담궈 가볍게 씻어 준다.",
            "깨끗히 씻은 무는 면보에 꽉 짜 준다. 수분을 완전하게 제거한다.",
            "통깨만 빼고 모든 양념을 볼에 담아 미리 고춧가루도 불려 주면 색이 더 곱다.",
            "꽉 짠 무와 양념 그리고 쪽파.청양고추를 넣고 비벼 준다.",
            "마지막에 통깨를 넣고 2시간 정도 둔다."
        ]
    }),
    createRecipe({
        title: "가을 무나물",
        chef: "마카롱여사",
        category: "나물",
        imgUrl: "/images/radishGreens.png",
        videoUrl: "https://www.youtube.com/watch?v=qDJWOm7SwLI",
        sourceUrl: "",
        ingredients: [
            "무 500g",
            "쪽파 취향껏 조금"
        ],
        seasonings: [
            "소금 1t",
            "참기름 또는 들기름 1T",
            "육수 3T(멸치, 다시마 우린 물 / 물 3T, 참치액 1t)"
        ],
        steps: [
            "무는 얇게 채 썰어 준다. 얇고 일정한 크기로 썰어야 곱고 예쁘다.",
            "채 썬 무에 소금 1t 넣어 조물조물 버무려 15분 절여 씻지 말고 물기를 빼 준다.",
            "쪽파는 취향껏 조금 넣어 준다.",
            "팬에 참기름 또는 들기름 1T, 무를 넣어 볶아 준다.",
            "타지 않게 중불 정도에서 색이 나지 않게 볶아 준다.",
            "볶다가 국물이 없어지면 멸치육수 3T 넣어 볶아 준다.",
            "부족한 간은 소금으로 해 준다.",
            "다진 파 통깨 넣어 팬에서 꺼내 식힘 망에 올려 식혀 준다."
        ]
    }),
    createRecipe({
        title: "마늘쫑무침",
        chef: "마카롱여사",
        category: "무침",
        imgUrl: "/images/seasonedGarlicStems.png",
        videoUrl: "https://www.youtube.com/watch?v=Q_kWeNysck8",
        sourceUrl: "",
        ingredients: [
            "마늘쫑 400g"
        ],
        seasonings: [
            "고춧가루 2T",
            "고추장 2T",
            "식초 2T",
            "설탕 0.5T",
            "매실청 1T",
            "간장 1T",
            "참치액 0.5T",
            "통깨 1T",
            "참기름 조금"
        ],
        steps: [
            "마늘쫑 400g는 10cm 길이로 가늘게 썰어 준다.",
            "고춧가루 2T, 고추장 2T, 식초 2T, 설탕 0.5T, 매실청 1T, 간장 1T, 참치액 0.5T, 통깨 1T, 섞어 준다.",
            "마늘쫑은 끓는 물에 야들하게 1~2분 정도 삶아 준다.",
            "채반에 올려 물기 제거 후 양념장에 버무려 준다."
        ]
    }),
    createRecipe({
        title: "고등어조림",
        chef: "마카롱여사",
        category: "조림",
        imgUrl: "/images/braisedMackerel.png",
        videoUrl: "https://www.youtube.com/watch?v=vvm9XJEwnHc",
        sourceUrl: "",
        ingredients: [
            "고등어 2마리(갈치 1마리 / 병어 5마리 / 가자미 2마리 / 코다리)",
            "감자 큰 거 3개",
            "대파 1줄기",
            "양파 한 개",
            "청·홍고추 한 개씩"
        ],
        seasonings: [
            "고춧가루 3T",
            "설탕 1T",
            "마늘 1T",
            "미림 1T",
            "참치액 1T",
            "간장 2T",
            "맛간장 2T (간장 1T, 설탕 0.5T)",
            "참기름 1T",
            "생강즙 1t(생략 가능)",
            "후추 조금",
            "육수 400ml(멸치, 다시마 우린 물) 또는 생수"
        ],
        steps: [
            "양파, 대파, 청·홍고추는 썰어 준다.",
            "큰 감자 3개 나박나박 썰어 준다.",
            "고춧가루 3T, 설탕 1T, 마늘 1T, 미림 1T, 참치액 1T, 간장 2T, 맛간장 2T (간장 1T, 설탕 0.5T), 참기름 1T, 생강즙 1t(생략 가능), 후추 조금 양념을 섞어 준다.",
            "감자를 밑에 깔고 양파 올리고 양념장 조금 올리고 육수 붓고 고등어 2마리 올리고 양념장 올려 준다.",
            "육수 또는 생수 400ml 넣어 끓여 준다.",
            "냄비 뚜껑을 닫고 바글바글 끓이다가 마지막에 뚜껑 열고 센 불에 살짝 지져준다. (좀 튀김)"
        ]
    }),
    createRecipe({
        title: "고등어 양념조림",
        chef: "마카롱여사",
        category: "조림",
        imgUrl: "/images/braisedMackerelWithSeasoning.png",
        videoUrl: "https://www.youtube.com/watch?v=NQvl6C63vOI",
        sourceUrl: "",
        ingredients: [
            "고등어 2마리",
            "양파 반개",
            "대파 1개",
            "청양고추 2개"
        ],
        seasonings: [
            "다진 마늘 1T",
            "맛간장 3T(간장 1T, 설탕 1t)",
            "물 3T",
            "참치액 1T",
            "미림 1T",
            "생강술 1T",
            "고춧가루 2.5T",
            "물엿 1T",
            "매실액 1T(설탕 0.5T)",
            "참기름 1T"
        ],
        steps: [
            "대파, 청양고추 썰어 준다.",
            "양파 채 썰어 준다.",
            "다진 마늘 1T 맛간장 3T(간장 1T, 설탕 1t) 물 3T 참치액 1T 미림 1T 생강술 1T 고춧가루 2.5T 물엿 1T 매실액 1T(설탕 0.5T) 참기름 1T 양념을 섞어 준다.",
            "고등어는 물기를 제거 후 전분 가루 또는 부침가루 1T 묻혀준다.",
            "팬을 달궈 기름 1T 정도에 고등어 껍질이 아래로 가게 구워 준다.",
            "앞뒤로 모양을 잡아 바삭하게 굽는다. 양념장을 넣어 졸일 거라 완벽하게 익히지 않아도 된다.",
            "앞뒤로 노릇해지면 양념장을 끼얹어 냄비 뚜껑을 닫고 약불에서 5분 정도 구워 준다.",
            "타지 않게 불 조절해야 한다."
        ]
    }),
    createRecipe({
        title: "고구마 줄기무침(새콤)",
        chef: "마카롱여사",
        category: "무침",
        imgUrl: "/images/seasonedSweetPotatoStems.png",
        videoUrl: "https://www.youtube.com/watch?v=wr9IINn2Q50",
        sourceUrl: "",
        ingredients: [
            "껍질 벗긴 고구마 줄기 840g(물 600ml, 소금 1t)"
        ],
        seasonings: [
            "다진 쪽파 1T",
            "다진 청양고추 2개",
            "다진 마늘 1T",
            "통깨 1T",
            "고추장 1T",
            "고춧가루 1t",
            "설탕 1t",
            "2배 식초 1t",
            "간장 1T",
            "참치액 1t",
            "참기름 1T",
            "매실액 1T"
        ],
        steps: [
            "물 600ml, 소금 1t 넣어 끓기 시작하면 5분간 삶아 준다.",
            "삶은 고구마 줄기는 찬물에 헹궈 물기를 꼭 짜 준다.",
            "다진 쪽파 1T, 다진 청양고추 2개, 다진 마늘 1T, 통깨 1T, 고추장 1T, 고춧가루 1t, 설탕 1t, 2배 식초 1t, 간장 1T, 참치액 1t, 참기름 1T, 매실액 1T 양념을 섞어 준다.",
            "물기 꼭 짠 고구마 줄기와 양념에 무쳐 준다."
        ]
    }),
    createRecipe({
        title: "강된장",
        chef: "마카롱여사",
        category: "찌개",
        imgUrl: "/images/redBeanPasteSauce.png",
        videoUrl: "https://www.youtube.com/watch?v=wr9IINn2Q50",
        sourceUrl: "",
        ingredients: [
            "조갯살 250g",
            "감자 3개",
            "양파 1개",
            "대파 1개",
            "청양고추 6개",
            "쪽파 취향껏"
        ],
        seasonings: [
            "된장 1T",
            "쌈장 1T",
            "멸치 다시마 육수 200ml",
            "참치액 1t"
        ],
        steps: [
            "감자, 양파, 대파 깍둑썰어 준다.",
            "청양고추 6개 매운맛 싫으면 일반고추로 사용",
            "멸치 다시마 육수 200ml, 감자, 양파, 대파, 참치액 1t 넣어 끓여 준다.",
            "뚜껑 닫아 5분간 끓여 준다.",
            "감자가 익으면 된장, 쌈장 넣어 끓여 준다. (감자가 뭉개질 정도로 걸쭉하게 익혀 준다)",
            "조갯살 250g, 고추, 쪽파 넣어 끓여 주면 완성"
        ]
    }),
    createRecipe({
        title: "안 매운 어묵볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/non-spicyStir-friedFishCake.png",
        videoUrl: "https://www.youtube.com/watch?v=IYGExJORPx8",
        sourceUrl: "",
        ingredients: [
            "어묵 460g(어육 함량 높은 것)",
            "양파 1개",
            "다진 마늘 1t"
        ],
        seasonings: [
            "굴 소스 1T",
            "간장 1T",
            "참기름 1T",
            "설탕 1t",
            "물 3T",
            "기름 3T"
        ],
        steps: [
            "양파는 채 썰어 준다.",
            "어묵 460g 적당한 크기로 썰어 준다.",
            "굴 소스 1T, 간장 1T, 참기름 1T, 설탕 1t 양념을 섞어 준다.",
            "팬에 기름 3T 넣어 끓이다가 양념을 넣어 끓이다가 물 3T 넣어 끓여 준다.",
            "마늘, 양파, 어묵 넣어 볶아 준다.",
            "불을 중불 이하로 낮춰 볶아 주면 된다.",
            "마지막 통깨를 넣어 주면 완성"
        ]
    }),
    createRecipe({
        title: "진미채볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/stir-friedDriedSquid.png",
        videoUrl: "https://www.youtube.com/watch?v=9GBq9MM2jCc",
        sourceUrl: "",
        ingredients: [
            "진미채 150g(마요네즈 2T)"
        ],
        seasonings: [
            "고춧가루 1T",
            "설탕 1T",
            "통깨 1T",
            "꿀 2T",
            "참기름 1T",
            "식용유 또는 고추기름 0.5T",
            "고추장 1T",
            "미림 1T",
            "후추 조금"
        ],
        steps: [
            "진미채 150g은 먹기 좋은 크기로 잘라 준다.",
            "수입 이거나 딱딱할 경우 냄비에 물을 조금 넣고 물이 끓으면 진미채를 넣어 푸르르 데쳐준다. (불순물 및 MSG를 없애준다)",
            "데친 진미채를 물기를 완전히 제거해서 마요네즈 2T에 버무려 놓는다.",
            "팬에 고춧가루 1T, 설탕 1T, 통깨 1T, 꿀 2T, 참기름 1T, 식용유 또는 고추기름 0.5T, 고추장 1T, 미림 1T, 후추 조금 넣어 불을 켜고 양념장을 풀어 준다.",
            "끓기 시작하면 불을 줄이고 진미채를 넣어 약불에 양념이 잘 섞이게 볶아 준다.",
            "양념이 골고루 섞이게 풀어 가면서 볶아 준다."
        ]
    }),
    createRecipe({
        title: "잔멸치호두볶음",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/stir-friedAnchoviesWalnuts.png",
        videoUrl: "https://www.youtube.com/watch?v=E14ff1T8bqQ",
        sourceUrl: "",
        ingredients: [
            "잔멸치 150g",
            "호두 150g"
        ],
        seasonings: [
            "식용유 2T",
            "매실액 2T",
            "맛간장 1T(간장 1, 설탕 1t)",
            "생강술 1t",
            "미림 1T",
            "물엿 2T",
            "설탕 1t",
            "참기름 1t",
            "통깨 1T"
        ],
        steps: [
            "호두는 끓는 물에 1분 정도 데쳐 채반에 물기 빼 준다. (호두의 떫은맛과 불순물 제거)",
            "잔멸치는 배부분이 주홍빛인 멸치가 짜지 않고 맛나다",
            "빈 팬에 호두를 바삭하게 구워 준다.",
            "멸치도 바삭하게 구워 준다. (비린 맛 제거",
            "구운 멸치는 채 망에 깔끔하게 훌훌 털어 준다.",
            "팬에 식용유 2T, 매실액 2T, 맛간장 1T(간장 1, 설탕 1t), 생강술 1t, 미림 1T, 물엿 2T, 설탕 1t, 참기름 1t 넣는다.",
            "양념이 바글바글 끓으면 약불로 줄이고 멸치와 호두를 넣어 볶아 준다.",
            "약불에서 타지 않게 소스가 줄어 들 때까지 볶아 준다.",
            "마지막에 통깨 부려 준다."
        ]
    }),
    createRecipe({
        title: "잔멸치볶음 (매움)",
        chef: "마카롱여사",
        category: "볶음",
        imgUrl: "/images/stir-friedDriedAnchoviesHot.png",
        videoUrl: "https://www.youtube.com/watch?v=8ikbPoXrosU",
        sourceUrl: "",
        ingredients: [
            "잔멸치 150g"
        ],
        seasonings: [
            "고추기름 3T",
            "맛간장 2T",
            "맛술 1T",
            "설탕 2T",
            "고춧가루 1T",
            "생강즙 0.5T",
            "고추장 1T",
            "마요네즈 1T",
            "통깨 1T"
        ],
        steps: [
            "마른 팬에 멸치를 굽듯 수분을 날려 볶아 주고 부스러기 가루는 털어 준다.",
            "팬에 고추기름 3T, 맛간장 2T, 맛술 1T, 설탕 2T, 고춧가루 1T, 생강즙 0.5T, 고추장 1T, 마요네즈 1T 양념을 섞어 끓여준다.",
            "끓기 시작하면 중불에 1분 정도 끓여 준 다음 불을 끄거나 약불로 줄여 잔멸치 넣어 볶아준다. (식어도 멸치가 굳지 않음)",
            "마지막으로 통깨를 뿌려 마무리"
        ]
    }),
    createRecipe({
        title: "대파육개장",
        chef: "마카롱여사",
        category: "찌개",
        imgUrl: "/images/hotSpicyMeatStew.png",
        videoUrl: "https://www.youtube.com/watch?v=fGt0RLj5akQ",
        sourceUrl: "",
        ingredients: [
            "소고기 양지 600g(치마양지)",
            "물 4리터",
            "양파 반 개",
            "무 500g",
            "생강 1톨",
            "다시마 20cm",
            "대파 뿌리",
            "통후추 1t"
        ],
        seasonings: [
            "대파 600~1kg",
            "대파 1kg",
            "다진 마늘 1T",
            "참치액 1T",
            "국간장 2T",
            "고운 고춧가루 2T",
            "(매운)고춧가루 1T",
            "참기름 0.5T",
            "소금 0.5T"
        ],
        steps: [
            "소고기 양지 600g 찬물에 담가 1시간 핏물 제거한다.",
            "핏물 제거 후 물 4리터, 양파 반 개, 무 500g, 생강 1톨, 다시마 20cm, 대파 뿌리, 통후추 1t, 소고기 양지 600g 넣어 끓기 시작하면 중불로 낮춰 50분 삶아 준다.",
            "핏물 걷어 내면 국물 맛이 깔끔하다.",
            "국물은 거르고 고기는 꺼내 결대로 찢는다.",
            "대파 600~1kg 반라 10cm 길이로 자른다.",
            "고기와 대파 1kg, 다진 마늘 1T, 참치액 1T, 국간장 2T, 고운 고춧가루 2T, (매운) 고춧가루 1T, 참기름 0.5T 양념을 섞어 준다.",
            "고기 삶은 물 2.8~3L에 소금 0.5T 넣어 준다.",
            "양념한 고기와 대파를 국물에 넣어 끓여 준다. (끓기 시작하면 약불에 30~40분)"
        ]
    }),
    createRecipe({
        title: "알탕",
        chef: "마카롱여사",
        category: "탕",
        imgUrl: "/images/fishRoeSoup.png",
        videoUrl: "https://www.youtube.com/watch?v=gNr2E6BYIFQ",
        sourceUrl: "",
        ingredients: [
            "명태알 250g",
            "대구 곤이 250g",
            "쑥갓 한 줌",
            "미나리 한 줌",
            "무 350g",
            "멸치, 다시마 육수 1L",
            "청·홍 고추 한 개"
        ],
        seasonings: [
            "다진 마늘 1T",
            "다진 생강 1t",
            "고춧가루 2T",
            "꽃게액젓 2T (새우젓 국물, 까나리, 멸치)",
            "조선간장(집간장) 1T",
            "참치액 1T"
        ],
        steps: [
            "알과 곤이는 밀가루 물을 풀어 씻어 준 다음 헹구어 사용하면 비린내 제거도 되고 알의 맛도 빠지지 않음. (냉동일 경우 밀가루 물에 5분 정도 해동)",
            "무는 나박나박 썰고 청·홍 고추 어슷하게 썰어 준다.",
            "다진 마늘 1T, 다진 생강 1t, 고춧가루 2T, 꽃게액젓 2T (새우젓 국물, 까나리, 멸치), 조선간장(집간장) 1T, 진참치액 1T 넣어 양념 섞기",
            "육수 1L, 무, 양념장 2T 넣어 무를 먼저 익혀준다.",
            "팔팔 끓기 시작해 무가 익으면 알과 나머지 양념을 넣어 한소끔 끓여 준다.",
            "쑥갓, 미나리, 청·홍 고추 넣어 알이 익으면 완료"
        ]
    }),
    createRecipe({
        title: "달래파래무침",
        chef: "마카롱여사",
        category: "무침",
        imgUrl: "/images/SeasonedWildChiveGreenLaver.png",
        videoUrl: "https://www.youtube.com/watch?v=00dJhdL5K-0",
        sourceUrl: "",
        ingredients: [
            "물파래 200g",
            "달래 100g"
        ],
        seasonings: [
            "고춧가루 2T",
            "양조간장 1T",
            "진참치액 1T",
            "까나리액젓 0.5T",
            "참기름 1T",
            "통깨 1T"
        ],
        steps: [
            "파래는 소금 1T 넣어 바락바락 씻어 채반에 올려 물을 2~-3번 갈아 씻어 두 손으로 꼭 짜 준다.",
            "달래는 흙과 누런 잎을 떼어 내고 물에 담가 흔들흔들 씻어 손에 쥐고 물기 탁탁 털어 준다.",
            "달래 흰 부분은 다지고 줄기는 먹기 좋은 크기로 잘라 준다.",
            "물기 제거한 파래도 먹기 좋은 크기로 잘라 준다.",
            "고춧가루 2T, 양조간장 1T, 진참치액 1T, 까나리액젓 0.5T 넣어 양념 섞기",
            "달래, 파래, 양념, 통깨 1T, 참기름 1T 넣어 무쳐 준다.",
            "파래는 젓가락을 이용해 풀어 가면서 양념이 스며들게 무쳐 준다.",
            "고춧가루는 파래에서 나오는 수분을 잡아줌. 줄이지 않기"
        ]
    }),
    createRecipe({
        title: "청국장",
        chef: "마카롱여사",
        category: "국",
        imgUrl: "/images/bean-pasteSoup.png",
        videoUrl: "https://www.youtube.com/watch?v=pDRAexOV1Ac",
        sourceUrl: "",
        ingredients: [
            "청국장 220g",
            "두부 반 모 200g",
            "애호박 1/3개",
            "새송이버섯 1개",
            "감자 한 개",
            "대파 2개",
            "청양고추 2개",
            "신김치 2줄기",
            "소고기 120g (돼지고기)"
        ],
        seasonings: [
            "멸치, 다시마 우린 육수 300ml",
            "다진 마늘 1T",
            "고춧가루 1T",
            "참기름 2T"
        ],
        steps: [
            "애호박, 새송이버섯, 감자는 깍뚝모양으로 썰어 준다.",
            "대파, 청양고추는 송송 썰어 준다.",
            "신김치 두 줄기 정도 다져 준다.",
            "소고기 또는 돼지고기는 다져 준다.",
            "팬을 달궈 참기름 2T 넣고 대파, 다진 마늘 넣어 볶아 파, 마늘 향을 내준다.",
            "소고기를 넣어 타지 않게 중불에 수분이 없을 때까지 볶아 준다.",
            "육수, 청양고추, 감자 넣어 끓여 준다.",
            "끓기 시작하면 호박, 버섯, 신김치 넣어 준다.",
            "고춧가루 넣어 준다.",
            "짜지 않은 청국장 마지막에 넣어 살짝 끓여 주면 완성"
        ]
    }),
    createRecipe({
        title: "감자 참치 찌개",
        chef: "마카롱여사",
        category: "찌개",
        imgUrl: "/images/potatoTunaStew.png",
        videoUrl: "https://www.youtube.com/watch?v=Ezv9IjVQxGw",
        sourceUrl: "",
        ingredients: [
            "감자 큰 거 2개",
            "양파 1개",
            "애호박 반개",
            "대파 1대",
            "청양고추 3개",
            "참치 1캔(100g)",
            ""
        ],
        seasonings: [
            "식용유 2T",
            "다진 마늘 1T",
            "고추장 2T",
            "고춧가루 1T",
            "참치액 1T",
            "간장 1T (국간장)",
            "소금 약간",
            "육수 600ml (멸치, 다시마 육수)"
        ],
        steps: [
            "감자, 호박, 양파는 깍뚝 모양으로 썰어 주고 대파, 청양고추는 송송 썰어 준다.",
            "팬을 달궈 식용유 2T를 넣고 감자 다진 마늘 1T 넣어 볶다. ",
            "감자가 투명해지면 진참치액 1T, 국간장 1T, 고추장 2T를 넣어 볶다가 참치, 양파, 고춧가루 1T 넣어 볶아 준다.",
            "육수를 넣고 보글보글 끓기 시작하면 호박, 청양고추, 대파를 넣어 익을 때까지 끓여 준다.",
            "부족한 간은 소금으로 맞춰 준다."
        ]
    }),
    createRecipe({
        title: "동그랑땡",
        chef: "마카롱여사",
        category: "전",
        imgUrl: "/images/koreanStyleMeatball.png",
        videoUrl: "https://www.youtube.com/watch?v=vluRGMcE1Aw",
        sourceUrl: "",
        ingredients: [
            "간 돼지고기 1~1.2kg",
            "양파 중간 크기 반 개",
            "당근 중간 크기 반 개",
            "청양고추 5~6개",
            "대파 1줄기",
            "두부 반 모",
            "달걀 5개"
        ],
        seasonings: [
            "다진 마늘 2T",
            "다진 생강 1t",
            "후추 1t",
            "참기름 1T",
            "소금 2t",
            ""
        ],
        steps: [
            "두부는 무거운 거로 눌러 물기를 빼 주고 으깨 준다.",
            "간 돼지고기는 종이타올에 올려 앞뒤로 꾹꾹 눌러 수분 빼 준다.",
            "대파, 양파, 당근, 청양고추는 잘게 다져준다.",
            "큰 볼에 다진 채소를 담고 고기 두부 넣어 소금 2t, 참기름 1T, 후추 1t 넣어 찰기 있게 치대 준다.",
            "동글동글 한입 크기로 만들어 모양을 잡아 준다.",
            "달걀 5~6개는 풀어 준다. (간은 안 함)",
            "생강, 마늘을 저며 기름장을 만들어 전을 부치면 식어도 쩐내가 나지 않는다.",
            "팬은 미리 예열 후 기름을 골고루 바르고 달걀물에 담가 숟가락으로 떠 올려 팬에 한 개씩 올려 준다.",
            "중불 정도에서 중간에 기름을 추가 해 주면서 구워 주면 된다."
        ]
    }),
    createRecipe({
        title: "삶은 닭가슴살 샐러드 (534Kcal)",
        chef: "마카롱여사",
        category: "샐러드",
        imgUrl: "/images/boiledChickenBreastSalad.png",
        videoUrl: "https://www.youtube.com/watch?v=kEb1yUWbCvk",
        sourceUrl: "",
        ingredients: [
            "닭가슴살 300g (소금, 후추, 물 700ml)",
            "로메인 70g",
            "방울토마토 7개",
            "그래놀라 30g"
        ],
        seasonings: [
            "맛간장 1T",
            "참기름 1T",
            "발사믹 식초 1T",
            "통깨 1T",
            "후추"
        ],
        steps: [
            "닭고기는 소금, 후추, 물 700ml 냄비에 넣어 삶는다.",
            "끓기 시작하면 2분만 삶고 10분 동안 그 물에 둔다. (부들부들해짐)",
            "로메인, 토마토는 씻어 썰어주고 맛간장, 참기름, 발사믹 식초, 후추 넣어 소스 만들어 준다.",
            "삶은 닭은 얇게 슬라이스 해서 통깨와 소스를 넣어 버무린다. (소스 1.5T에 버무려 준다)",
            "로메인, 그래놀라, 방울토마토를 담고 양념한 닭가슴살을 올려 남은 소스를 올리면 완성",
            "닭가슴살은 1인분 100g / 삶은 닭고기를 냉장 보관 할 때는 삶은 물에 그대로 보관해야 비린내가 나지 않는다."
        ]
    }),
    createRecipe({
        title: "KFC 코우슬로",
        chef: "마카롱여사",
        category: "샐러드",
        imgUrl: "/images/kfcKawslow.png",
        videoUrl: "https://www.youtube.com/watch?v=6-V-jlLst4g",
        sourceUrl: "",
        ingredients: [
            "양배추 400g",
            "빨간 파프리카 1개",
            "노란 파프리카 1개",
            "양파 반 개",
            "옥수수 통조림 한 통"
        ],
        seasonings: [
            "마요네즈 2/3컵 (135ml 정도)",
            "씨겨자 2T",
            "설탕 3T",
            "식초 4T",
            "소금 1t",
            "후추 조금"
        ],
        steps: [
            "양배추는 밑동을 자르고 사등분 해 주고 가운데 심을 잘라 한 장씩 뜯어 충분한 물에 담가 여러 번 씻어 채반에서 물기 제거.",
            "손바닥으로 꾹 눌러 부피감을 줄여 잘게 다져 볼에 담아 준다.",
            "빨파, 노파 파프리카 한개 밑동 잘라 반 갈라 씨는 털고 채 썰어 다져 준다.",
            "양파 반 개 다져 준다.",
            "옥수수 통조림 한 통 뜨거운 물로 샤워",
            "썰어 놓은 재료 볼에 넣어 설탕 3T, 식초 4T, 소금 1t, 씨겨자 2T, 후추 조금, 마요네즈 2/3컵 (135ml 정도) 넣어 잘 섞어 주세요.",
            "만들고 한 시간 뒤에 먹어야 제맛"
        ]
    }),
    createRecipe({
        title: "비빔장",
        chef: "day_momtable",
        category: "양념",
        imgUrl: "/images/CuVe8QhOVuZ.png",
        videoUrl: "https://www.instagram.com/reel/CuVe8QhOVuZ/?utm_source=ig_embed&amp;utm_campaign=loading",
        sourceUrl: "",
        ingredients: [
            "",
            ""
        ],
        seasonings: [
            "고추장 3T",
            "참기름 3T",
            "설탕 2T",
            "마늘 1T"
        ],
        steps: [
            "비빔국수, 쫄면 등"
        ]
    }),
    createRecipe({
        title: "썬드라이 토마토",
        chef: "마카롱여사",
        category: "재료",
        imgUrl: "/images/sundryTomatoes.png",
        videoUrl: "https://www.youtube.com/watch?v=U0rGG74epp0?si=2Wr5WPxXoCL6fWEJ",
        sourceUrl: "",
        ingredients: [
            "방울토마토(대추방울이 사용) 1kg",
            ""
        ],
        seasonings: [
            "소금 1t",
            "설탕 1t",
            "화이트발사믹 2t"
        ],
        steps: [
            "방울토마토는 깨끗이 씻어 물기 제거 후 반갈라 소금, 설탕, 화이트발마식에 버무려준다.",
            "미리 예열한 오븐 90도에 3시간 구워 준다. 90도가 색이 선명하면서 당도가 가장 많이 올라온다.",
            "구울 때 중간에 트레이 방향을 돌려주면 골고루 말려져 좋다.",
            "말린 토마토는 식힘망에 식힌 다음 열탕소독한 병에 넣어 올리브오일을 가득 채워 냉장보관",
            "말린토마토는 샌드위치 또는 냉파스타 할때 사용"
        ]
    }),
    createRecipe({
        title: "헤이즐넛 바질페스토",
        chef: "마카롱여사",
        category: "페스토",
        imgUrl: "/images/hazelnutBasilFesto.png",
        videoUrl: "https://www.youtube.com/watch?v=U0rGG74epp0?si=2Wr5WPxXoCL6fWEJ&amp;start=72",
        sourceUrl: "",
        ingredients: [
            "바질 300g",
            "구운 헤이즐넛 200g(아몬드, 잣)",
            "파르미지아노레지아노 120g"
        ],
        seasonings: [
            "마늘 10알",
            "소금 1T",
            "후추 적당히",
            "엑스트라버진 올리브오일 500ml"
        ],
        steps: [
            "헤이즐넛은 팬을 예열 후 노릇하게 볶아 식혀 준다.",
            "바질은 깨끗하게 씻어 물기를 제거 해준다.",
            "파르미지아노 레지아노 치즈는 그레이터로 곱게 갈아 준다.",
            "믹서기에 마늘 바질 헤이즐넛 소금 후추 올리브오일 재료를 넣고 갈아 준다.",
            "갈아놓은 치즈를 섞어준다.",
            "보관통에 담아 윗면에 올리브오일로 공기접촉을 막아 뚜껑 닫아 냉장 또는 냉동보관한다."
        ]
    }),
    createRecipe({
        title: "야채 + 비빔 + 만두 = 야비만두",
        chef: "다름이네",
        category: "간식",
        imgUrl: "/images/DOIf-9VEh2P.png",
        videoUrl: "",
        sourceUrl: "https://www.instagram.com/p/DOIf-9VEh2P/",
        ingredients: [
            "만두",
            "오이",
            "양배추",
            "적양배추",
            "양파",
            "깻잎"
        ],
        seasonings: [
            "고추장 1",
            "고춧가루 2",
            "설탕 2",
            "매실청 1",
            "다진마늘 1",
            "미림 2 ",
            "식초 4",
            "참기름 1",
            "통깨 ✨"
        ],
        steps: [
            "각종 야채는 채 썰어 준비",
            "양념 재료 모두 넣어 양념장 만들기",
            "만두 굽기",
            "야채와 양념장 넣어 버무리기",
            "플레이팅"
        ]
    }),
    createRecipe({
        title: "오리제육볶음",
        chef: "이정현",
        category: "복음",
        imgUrl: "/images/DSMdIULEtYp.png",
        videoUrl: "",
        sourceUrl: "https://www.instagram.com/p/DSMdIULEtYp/",
        ingredients: [
            "오리",
            "버섯",
            "양파",
            "부추",
            "청주",
            "청양고추",
            "참나물"
        ],
        seasonings: [
            "고추장 3T",
            "간장 2T",
            "설탕 3T",
            "다진마늘 2T",
            "고춧가루",
            "굴소스(또는 굴액)"
        ],
        steps: [
            "오리고기 손질 포인트: 수분/핏물은 키친타월로 톡",
            "향 잡기: 청주 + 청양고추 넣고 잠깐 재우기",
            "재운 뒤 나온 수분은 제거하고 양념에 버무리기",
            "양파·대파 듬뿍 넣고 팬에 볶기",
            "참나물 넣는 순간 향 폭발"
        ]
    }),
    createRecipe({
        title: "삭히지 않는 부산땡초무침",
        chef: "1분요리왕 통키",
        category: "무침",
        imgUrl: "/images/DWgw1mwj_DA.png",
        videoUrl: "",
        sourceUrl: "https://www.instagram.com/p/DWgw1mwj_DA/",
        ingredients: [
            "땡초(청양고추) 1kg",
            "마늘 1/2컵 (반으로 갈라서 준비)",
            "절임물: 물 3리터, 천일염 2컵"
        ],
        seasonings: [
            "고춧가루 8큰술",
            "멸치액젓 10큰술",
            "소주 4큰술",
            "쌀조청 2큰술 (양념이 잘 달라붙게 함)",
            "통깨 2큰술 (마무리용 별도)"
        ],
        steps: [
            "물을 팔팔 끓인 뒤 천일염 2컵을 넣고 바로 불을 끕니다.",
            "끓는 소금물에 땡초 1kg을 넣습니다.",
            "체망으로 꾹 눌러 고추가 뜨지 않게 한 뒤, 4시간 동안 그대로 절여줍니다.",
            "Tip: 소금물에 일주일씩 삭히지 않아도 짜지 않고 올리브색으로 예쁘게 절여집니다.",
            "4시간 후, 절여진 고추를 꺼내 무거운 것으로 30분간 눌러 물기를 빼고 납작하게 만듭니다.",
            "볼에 양념을 넣고 잘 섞어줍니다.",
            "커다란 대야에 물기를 뺀 땡초와 만들어 둔 양념장을 넣습니다.",
            "양념이 골고루 묻도록 잘 버무려줍니다.",
            "반으로 가른 마늘 1/2컵을 넣고 한 번 더 버무립니다.",
            "마지막으로 통깨를 솔솔 뿌려 마무리합니다.",
            "이 레시피는 만든 즉시 먹어도 맛있지만, 냉장 보관하며 숙성시킬수록 깊은 맛이 살아납니다. 갓 지은 하얀 쌀밥 위에 하나 척 올려서 드셔보세요!"
        ]
    }),
    createRecipe({
        title: "문어 오렌지 샐러드 (4-5인분 +/-)",
        chef: "에밀리엣홈",
        category: "샐러드",
        imgUrl: "/images/DVSaZ8SEgVN.png",
        videoUrl: "",
        sourceUrl: "https://www.instagram.com/p/DVSaZ8SEgVN/",
        ingredients: [
            "문어 다리 2개",
            "까세레체 100g",
            "사과 1/2개",
            "오렌지 2개",
            "양파 1/2개",
            "루꼴라 50g",
            "당근채 약간",
            "아몬드 한 줌",
            "라즈베리 한 줌"
        ],
        seasonings: [
            "올리브오일 6큰술",
            "레몬즙 2큰술",
            "화이트 발사믹 2큰술",
            "홀그레인 머스타드 1/2큰술",
            "후추 넉넉히",
            "소금 두세꼬집"
        ],
        steps: [
            "먼저 숏 파스타 까세레체 또는 펜네 조리시간에 맞도록 삶아 준비합니다.",
            "다 삶아진 파스타는 물기 없이 건져네 올리브오일 두바퀴 돌려주고 잠시 식혀주세요. (물에 헹구지 마세요!)",
            "사과랑 토마토는 미니 깍뚝썰기 하고 오랜지는 반달모양으로 커팅합니다.",
            "양파 최대한 얇게 채썰고 문어도 두껍지 않게 썰어주세요.",
            "당근채, 루꼴라 5cm로 자른거, 아몬드 슬라이스, 건 크랜베리까지 준비합니다.",
            "드레싱은 미리 만들어 꿀과 머스타드 오일이 모두 함께 융화가 되도록 섞어 부으면 더 좋고, 영상처럼 이렇게 다 넣어 골고루 잘 섞어주면 됩니다."
        ]
    }),
    createRecipe({
        title: "오징어 두부 두루치기 2인분",
        chef: "하리미쿡",
        category: "두루치기",
        imgUrl: "/images/DWbDuuJk0Em.png",
        videoUrl: "",
        sourceUrl: "https://www.instagram.com/p/DWbDuuJk0Em/",
        ingredients: [
            "두부 300g",
            "오징어 작은거 3마리",
            "양파 반개",
            "애호박 반개",
            "소금 후추"
        ],
        seasonings: [
            "진간장3T 올리고당 1T",
            "고춧가루 2T",
            "고추장1T",
            " 다진마늘 1T",
            "들기름 1T",
            "카레가루 1T",
            "소금한꼬집, 후추갈길",
            "물 150ml"
        ],
        steps: [
            "오징어는 손질하고 두부는 물기를 제거하고 잘라요. 소금 후추 뿌려 기름둘러 노릇하게 익혀요",
            "준비해놓은 양념 반절 넣어주고 야채 오징어 그 위로 반절 뿌려 뚜껑덮어 약불로 5분 끓여요",
            "먹기 전 깻들기름 한바퀴 둘러 먹어요"
        ]
    }),
    createRecipe({
        title: "가지 두부볶음",
        chef: "청이레시피",
        category: "볶음",
        imgUrl: "/images/DTgmtddk66T.png",
        videoUrl: "",
        sourceUrl: "https://www.instagram.com/p/DTgmtddk66T/",
        ingredients: [
            "가지 2개",
            "전분가루",
            "대파 1/2대",
            "고추 1개(생략가능)",
            "식용유",
            "통깨 1T",
            "참기름 1T"
        ],
        seasonings: [
            "진간장 4T",
            "굴소스 1T",
            "두반장 1T",
            "설탕 1t",
            "다진 마늘 1T",
            "맛술 4T",
            "물엿 3T"
        ],
        steps: [
            "가지와 두부를 큼지막하게 깍뚝 썰어 두부 수분은 키친타올로 최대한 흡수시켜 제거해 주세요.",
            "양념소스 먼저 만들어 두고 가지먼저 비닐에 담은 전분가루에 흔들며 입혀 구워주고 두부도 같은 방법으로 구워 팬바닥에 남은 기름은 닦아 주세요.",
            "가지와 두부에 양념소스,쫑쫑 썰은 대파,고추 넣고 볶으며 소스가 골고루 흡수 되면 불 끄고 참기름 통깨 뿌리면 완성!!"
        ]
    }),
    createRecipe({
        title: "고등어찜",
        chef: "청이레시피",
        category: "찜",
        imgUrl: "/images/DW2RRKik5UI.png",
        videoUrl: "",
        sourceUrl: "https://www.instagram.com/p/DW2RRKik5UI/",
        ingredients: [
            "고등어 2마리",
            "쌀뜨물 이나 물 + 밀가루 1T",
            "쪽파 고명용"
        ],
        seasonings: [
            "진간장 1T",
            "고춧가루 1T",
            "다진마늘 1/2T",
            "생강가루 1t",
            "다진 대파 1/3대",
            "들기름 1T"
        ],
        steps: [
            "고등어를 쌀뜨물이나 밀가루 풀은 물에 담그면서 안쪽에 있는 검은 막을 벗겨내 주시면 비린맛이 안 난답니다.",
            "찜냄비에 물올려 끓는 동안 양념재료 섞어놓고 수증기가 올라오면 고등어는 쌀뜨물에서 고대로 건져 채반에 올려주고 양념을 위로 발라 뚜껑 닫아 중강불에 15분 쪄내면 비린맛 하나 없이 촉촉한 고등어찜 완성",
            "쪽파 있으면 고명 올려 접시로 옮겨 맛있고 간단한 저녁 메인반찬으로 꼭 드셔보세여"
        ]
    }),
    createRecipe({
        title: "아작한 식감 오이국수",
        chef: "청이레시피",
        category: "면",
        imgUrl: "/images/DMOiuXfTxd7.png",
        videoUrl: "",
        sourceUrl: "https://www.instagram.com/p/DMOiuXfTxd7/?img_index=1",
        ingredients: [
            "백오이 4~5개",
            "다진 파프리카 빨노1/2개씩(생략가능)",
            "쫑쫑썰은 청양고추 취향껏(생략가능)",
            "다진 마늘 1T",
            "멸치가루 육수 2포(코인 갈아서 가능)"
        ],
        seasonings: [
            "물 1L",
            "백간장 1T(국간장 가능) 국물이 까맣게 되는 게 싫어 백간장 사용함.",
            "2배 사과식초 4T(양조 8T 가능)",
            "꽃소금 1T 반",
            "매실액 5T",
            "설탕 3T(대체당 가능)"
        ],
        steps: [
            "소금으로 문질러 가며 깨끗이 씻은 오이 양쪽 끝은 잘라내고 채칼로 길~~~게 긁어내 오이 속 씨부분은 넣으면 물러지고 물이 많이 생기니 냉국 만들면서 드시고 수분보충 하세요.",
            "다 긁어낸 오이채에 가루육수와 다진 마늘 넣고 살랑살랑 무쳐두면 식감과 감칠맛이 두 배입니다~~ 다진 파프리카 청양고추도 넣어주세요.",
            "육수 재료 모두 섞어 5분 살얼음 만드는 방법 이전 피드 보며 빠르게 만들어 오이채에 부어 섞어 맛나게 아작아작 식감 즐기며 호로록 한 대접 드셔보세요."
        ]
    }),
    createRecipe({
        title: "",
        chef: "",
        category: "",
        imgUrl: "/images/sample.png",
        videoUrl: "",
        sourceUrl: "",
        ingredients: [
            "",
            ""
        ],
        seasonings: [
            "",
            ""
        ],
        steps: [
            "",
            ""
        ]
    }),
] // export