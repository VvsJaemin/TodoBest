package kr.bora.api.user.domain;

import lombok.Getter;

import java.util.Arrays;

@Getter
public enum Authority {
    ROLE_ADMIN("ADMIN", "관리자"),
    ROLE_USER("USER", "사용자");

    public String getCode() {
        return code;
    }

    public String getSymbol() {
        return symbol;
    }

    private final String code;
    private final String symbol;

    Authority(String code, String symbol) {
        this.code = code;
        this.symbol = symbol;
    }

    public static Authority of(String symbol) {
        return Arrays.stream(Authority.values())
                .filter(r -> r.getSymbol().equals(symbol))
                .findAny()
                .orElse(ROLE_USER);
    }
}