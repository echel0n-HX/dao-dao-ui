import * as _29 from "./adminmodule/adminmodule/genesis";
import * as _30 from "./adminmodule/adminmodule/query";
import * as _31 from "./adminmodule/adminmodule/tx";
import * as _32 from "./auth/v1beta1/auth";
import * as _33 from "./auth/v1beta1/genesis";
import * as _34 from "./auth/v1beta1/query";
import * as _35 from "./auth/v1beta1/tx";
import * as _36 from "./authz/v1beta1/authz";
import * as _37 from "./authz/v1beta1/event";
import * as _38 from "./authz/v1beta1/genesis";
import * as _39 from "./authz/v1beta1/query";
import * as _40 from "./authz/v1beta1/tx";
import * as _41 from "./bank/v1beta1/authz";
import * as _42 from "./bank/v1beta1/bank";
import * as _43 from "./bank/v1beta1/genesis";
import * as _44 from "./bank/v1beta1/query";
import * as _45 from "./bank/v1beta1/tx";
import * as _46 from "./base/abci/v1beta1/abci";
import * as _47 from "./base/query/v1beta1/pagination";
import * as _48 from "./base/tendermint/v1beta1/query";
import * as _49 from "./base/tendermint/v1beta1/types";
import * as _50 from "./base/v1beta1/coin";
import * as _51 from "./crypto/ed25519/keys";
import * as _52 from "./crypto/multisig/keys";
import * as _53 from "./crypto/secp256k1/keys";
import * as _54 from "./distribution/v1beta1/distribution";
import * as _55 from "./distribution/v1beta1/genesis";
import * as _56 from "./distribution/v1beta1/query";
import * as _57 from "./distribution/v1beta1/tx";
import * as _58 from "./feegrant/v1beta1/feegrant";
import * as _59 from "./feegrant/v1beta1/genesis";
import * as _60 from "./feegrant/v1beta1/query";
import * as _61 from "./feegrant/v1beta1/tx";
import * as _62 from "./gov/v1/genesis";
import * as _63 from "./gov/v1/gov";
import * as _64 from "./gov/v1/query";
import * as _65 from "./gov/v1/tx";
import * as _66 from "./gov/v1beta1/genesis";
import * as _67 from "./gov/v1beta1/gov";
import * as _68 from "./gov/v1beta1/query";
import * as _69 from "./gov/v1beta1/tx";
import * as _70 from "./mint/v1beta1/genesis";
import * as _71 from "./mint/v1beta1/mint";
import * as _72 from "./mint/v1beta1/query";
import * as _73 from "./mint/v1beta1/tx";
import * as _74 from "./msg/v1/msg";
import * as _75 from "./orm/v1/orm";
import * as _76 from "./params/v1beta1/params";
import * as _77 from "./params/v1beta1/query";
import * as _78 from "./query/v1/query";
import * as _79 from "./slashing/v1beta1/genesis";
import * as _80 from "./slashing/v1beta1/query";
import * as _81 from "./slashing/v1beta1/slashing";
import * as _82 from "./slashing/v1beta1/tx";
import * as _83 from "./staking/v1beta1/authz";
import * as _84 from "./staking/v1beta1/genesis";
import * as _85 from "./staking/v1beta1/query";
import * as _86 from "./staking/v1beta1/staking";
import * as _87 from "./staking/v1beta1/tx";
import * as _88 from "./tx/signing/v1beta1/signing";
import * as _89 from "./tx/v1beta1/service";
import * as _90 from "./tx/v1beta1/tx";
import * as _91 from "./upgrade/v1beta1/query";
import * as _92 from "./upgrade/v1beta1/tx";
import * as _93 from "./upgrade/v1beta1/upgrade";
import * as _360 from "./adminmodule/adminmodule/tx.amino";
import * as _361 from "./auth/v1beta1/tx.amino";
import * as _362 from "./authz/v1beta1/tx.amino";
import * as _363 from "./bank/v1beta1/tx.amino";
import * as _364 from "./distribution/v1beta1/tx.amino";
import * as _365 from "./feegrant/v1beta1/tx.amino";
import * as _366 from "./gov/v1/tx.amino";
import * as _367 from "./gov/v1beta1/tx.amino";
import * as _368 from "./mint/v1beta1/tx.amino";
import * as _369 from "./slashing/v1beta1/tx.amino";
import * as _370 from "./staking/v1beta1/tx.amino";
import * as _371 from "./upgrade/v1beta1/tx.amino";
import * as _372 from "./adminmodule/adminmodule/tx.registry";
import * as _373 from "./auth/v1beta1/tx.registry";
import * as _374 from "./authz/v1beta1/tx.registry";
import * as _375 from "./bank/v1beta1/tx.registry";
import * as _376 from "./distribution/v1beta1/tx.registry";
import * as _377 from "./feegrant/v1beta1/tx.registry";
import * as _378 from "./gov/v1/tx.registry";
import * as _379 from "./gov/v1beta1/tx.registry";
import * as _380 from "./mint/v1beta1/tx.registry";
import * as _381 from "./slashing/v1beta1/tx.registry";
import * as _382 from "./staking/v1beta1/tx.registry";
import * as _383 from "./upgrade/v1beta1/tx.registry";
import * as _384 from "./adminmodule/adminmodule/query.rpc.Query";
import * as _385 from "./auth/v1beta1/query.rpc.Query";
import * as _386 from "./authz/v1beta1/query.rpc.Query";
import * as _387 from "./bank/v1beta1/query.rpc.Query";
import * as _388 from "./base/tendermint/v1beta1/query.rpc.Service";
import * as _389 from "./distribution/v1beta1/query.rpc.Query";
import * as _390 from "./feegrant/v1beta1/query.rpc.Query";
import * as _391 from "./gov/v1/query.rpc.Query";
import * as _392 from "./gov/v1beta1/query.rpc.Query";
import * as _393 from "./mint/v1beta1/query.rpc.Query";
import * as _394 from "./params/v1beta1/query.rpc.Query";
import * as _395 from "./slashing/v1beta1/query.rpc.Query";
import * as _396 from "./staking/v1beta1/query.rpc.Query";
import * as _397 from "./tx/v1beta1/service.rpc.Service";
import * as _398 from "./upgrade/v1beta1/query.rpc.Query";
import * as _399 from "./adminmodule/adminmodule/tx.rpc.msg";
import * as _400 from "./auth/v1beta1/tx.rpc.msg";
import * as _401 from "./authz/v1beta1/tx.rpc.msg";
import * as _402 from "./bank/v1beta1/tx.rpc.msg";
import * as _403 from "./distribution/v1beta1/tx.rpc.msg";
import * as _404 from "./feegrant/v1beta1/tx.rpc.msg";
import * as _405 from "./gov/v1/tx.rpc.msg";
import * as _406 from "./gov/v1beta1/tx.rpc.msg";
import * as _407 from "./mint/v1beta1/tx.rpc.msg";
import * as _408 from "./slashing/v1beta1/tx.rpc.msg";
import * as _409 from "./staking/v1beta1/tx.rpc.msg";
import * as _410 from "./upgrade/v1beta1/tx.rpc.msg";
import * as _592 from "./rpc.query";
import * as _593 from "./rpc.tx";
export namespace cosmos {
  export namespace adminmodule {
    export const adminmodule = {
      ..._29,
      ..._30,
      ..._31,
      ..._360,
      ..._372,
      ..._384,
      ..._399
    };
  }
  export namespace auth {
    export const v1beta1 = {
      ..._32,
      ..._33,
      ..._34,
      ..._35,
      ..._361,
      ..._373,
      ..._385,
      ..._400
    };
  }
  export namespace authz {
    export const v1beta1 = {
      ..._36,
      ..._37,
      ..._38,
      ..._39,
      ..._40,
      ..._362,
      ..._374,
      ..._386,
      ..._401
    };
  }
  export namespace bank {
    export const v1beta1 = {
      ..._41,
      ..._42,
      ..._43,
      ..._44,
      ..._45,
      ..._363,
      ..._375,
      ..._387,
      ..._402
    };
  }
  export namespace base {
    export namespace abci {
      export const v1beta1 = {
        ..._46
      };
    }
    export namespace query {
      export const v1beta1 = {
        ..._47
      };
    }
    export namespace tendermint {
      export const v1beta1 = {
        ..._48,
        ..._49,
        ..._388
      };
    }
    export const v1beta1 = {
      ..._50
    };
  }
  export namespace crypto {
    export const ed25519 = {
      ..._51
    };
    export const multisig = {
      ..._52
    };
    export const secp256k1 = {
      ..._53
    };
  }
  export namespace distribution {
    export const v1beta1 = {
      ..._54,
      ..._55,
      ..._56,
      ..._57,
      ..._364,
      ..._376,
      ..._389,
      ..._403
    };
  }
  export namespace feegrant {
    export const v1beta1 = {
      ..._58,
      ..._59,
      ..._60,
      ..._61,
      ..._365,
      ..._377,
      ..._390,
      ..._404
    };
  }
  export namespace gov {
    export const v1 = {
      ..._62,
      ..._63,
      ..._64,
      ..._65,
      ..._366,
      ..._378,
      ..._391,
      ..._405
    };
    export const v1beta1 = {
      ..._66,
      ..._67,
      ..._68,
      ..._69,
      ..._367,
      ..._379,
      ..._392,
      ..._406
    };
  }
  export namespace mint {
    export const v1beta1 = {
      ..._70,
      ..._71,
      ..._72,
      ..._73,
      ..._368,
      ..._380,
      ..._393,
      ..._407
    };
  }
  export namespace msg {
    export const v1 = {
      ..._74
    };
  }
  export namespace orm {
    export const v1 = {
      ..._75
    };
  }
  export namespace params {
    export const v1beta1 = {
      ..._76,
      ..._77,
      ..._394
    };
  }
  export namespace query {
    export const v1 = {
      ..._78
    };
  }
  export namespace slashing {
    export const v1beta1 = {
      ..._79,
      ..._80,
      ..._81,
      ..._82,
      ..._369,
      ..._381,
      ..._395,
      ..._408
    };
  }
  export namespace staking {
    export const v1beta1 = {
      ..._83,
      ..._84,
      ..._85,
      ..._86,
      ..._87,
      ..._370,
      ..._382,
      ..._396,
      ..._409
    };
  }
  export namespace tx {
    export namespace signing {
      export const v1beta1 = {
        ..._88
      };
    }
    export const v1beta1 = {
      ..._89,
      ..._90,
      ..._397
    };
  }
  export namespace upgrade {
    export const v1beta1 = {
      ..._91,
      ..._92,
      ..._93,
      ..._371,
      ..._383,
      ..._398,
      ..._410
    };
  }
  export const ClientFactory = {
    ..._592,
    ..._593
  };
}