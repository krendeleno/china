import * as React from "react";

const SvgLike = (props) => (
  <svg
    width={26}
    height={26}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path fill="url(#like_svg__a)" d="M0 0h26v26H0z" />
    <path fill="url(#like_svg__b)" d="M0 0h26v26H0z" />
    <path fill="url(#like_svg__c)" d="M0 0h26v26H0z" />
    <path fill="url(#like_svg__d)" d="M0 0h26v26H0z" />
    <defs>
      <pattern
        id="like_svg__a"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#like_svg__e" transform="scale(.00444)" />
      </pattern>
      <pattern
        id="like_svg__b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#like_svg__e" transform="scale(.00444)" />
      </pattern>
      <pattern
        id="like_svg__c"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#like_svg__e" transform="scale(.00444)" />
      </pattern>
      <pattern
        id="like_svg__d"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#like_svg__e" transform="scale(.00444)" />
      </pattern>
      <image
        id="like_svg__e"
        width={225}
        height={225}
        xlinkHref="data:image/png;base64,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8jlhY4xYphBonXzHczIJmYRKDsuudQn4AIiESFhWJGXjSHig5wLCh/VKLOusdeVtI8YkZBLWsce0UyQ8AemCwiQ0pXThMq6s7RExCZmECyvj35r62zFnV4SESOhP6qIVHb8dg4QvwsHt6KL2mLYVcSvKRxSH5iChKa0LlomagkiIhAvqErOlqCmIhEgYk9jFqkYKiIRIuJguMdtBwgtcXZB4JrwAu9ghrmw9w8ZHFHxEUUyre9tFwou8XKCYhBeBFznMlatXuJiETMJXGSn77xG/HXMGEwmRsKxkzzbeawrydpS3owj4AQEkvBkNFzCeCW+CX/RwV56u4uF2lNvRq1kpcxwSNrTaBY1J2AB/sSWuLN3BwiRkEt7Jy/LHImFji13gmISNDVhkmStHd3EwCZmEdzOz7PFIKLTWBY9JKDRh8qWuDLVgYBIyCVtys9waJBRb6gLIJBQbMelyV35at88kZBK2ZmeZdUhoaKULIpPQ0IzJSkT+7ZirKJiETMKrWVnyONcPcAUOEiKhkp+p12YQ8AEQCZFwapGUi0dChd5hrQsmz4TGpiQv5cqMY5tMQiahI0fT1UBCc8tcQJmE5sYkLefKi2t7TEImoStL09RBwoBWuaAyCQOak6ykKyvObTEJmYTOPKWvhYRBLXKBZRIGNShJ2UdOth4nuaS3y2ASMgkz5TH0WpAwEC+TMBDuIqVdGYnAwSRkEkbkKl1NJAxuiQswz4TBjRpU3pWPqMtnEjIJo7KVpi4SdmiFCzKTsEOzOp/ClY3Iy2YSMgkj8zW8NhJ2aoELNJOwU8M6ncaVi+jLZRIyCaMzNqw+EnZE74LNJOzYtOBTuTIRfJlv5ZmETMIeOet+jqy/HXMGAgmRsLsg0SecaQoyCQ9p4HY0Wo8+9ZGwD+d/zuKCjoQDmmc+pSsL5st6Wo7bUW5He+Yt9FwzCsjtKLejoVL0LD6rgEtJ6PiyJrejPbXxnWumN6FLvx1FQl+oZ6o08wTcOEvPhI8ij/CPbpq7ERn2NJpp9vO7ez5yv5KEmcLqbkqmvY0MSKZz73vsuPPJsjdJwm0SugW4CmcvivsaVmryVZ4zHBfZ81H7lyXc35K6RTiDsjVhO9fx/ztBIqKT5v1axxdl2wuYrVKPvN2/6vsrLBLePy0rIAAB24sZUEIAAhoBJqHGj9UQkAkgoYyQAhDQCCChxo/VEJAJIKGMkAIQ0AggocaP1RCQCSChjJACENAIIKHGj9UQkAkgoYyQAhDQCCChxo/VEJAJIKGMkAIQ0AggocaP1RCQCSChjJACENAIIKHGj9UQkAkgoYyQAhDQCCChxo/VEJAJIKGMkAIQ0AggocaP1RCQCSChjJACENAIIKHGj9UQkAkgoYyQAhDQCCChxo/VEJAJIKGMkAIQ0Aj8D2Gq0Us1qhXKAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
);

export default SvgLike;
