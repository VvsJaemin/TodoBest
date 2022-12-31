package kr.bora.api.user.domain;

import kr.bora.api.common.domain.BaseEntity;
import kr.bora.api.socialAuth.domain.ProviderType;
import kr.bora.api.user.domain.reader.MailSender;
import kr.bora.api.user.domain.reader.UserStatus;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.builder.ToStringBuilder;
import org.apache.commons.lang3.builder.ToStringStyle;
import org.hibernate.envers.Audited;
import org.hibernate.envers.RelationTargetAuditMode;
import org.springframework.data.domain.AfterDomainEventPublication;
import org.springframework.data.domain.DomainEvents;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
@Entity
@Table(name="users")
@Slf4j
@Audited(withModifiedFlag = true)
public class User extends BaseEntity {
//notnull : username , password , phonenum, gender
    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long userId;

    //username은 이메일이다.
    @Column(name="username", nullable = false, length = 50)
    private String username;

    @Column(name="password", nullable = false)
    private String password;

    @Column(name = "nick_name", nullable = true, length = 20)
    private String nickName;

    @Column(name="authority")
    @Enumerated(EnumType.STRING)
    private Authority authority;

    @Enumerated(EnumType.STRING)
    private ProviderType providerType;

    private String oauthId;

    public void changePassword(String password) {
        this.password = password;
    }

    public void changeNickname(String nickName) {
        this.nickName = nickName;
    }

    public void setUsername(String username) {
        this.username = username;
    }


}