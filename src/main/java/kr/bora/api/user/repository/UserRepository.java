package kr.bora.api.user.repository;

import kr.bora.api.user.domain.User;
import kr.bora.api.user.domain.reader.UserStatus;
import kr.bora.api.user.dto.UserDto;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.parameters.P;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;


public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByusername(String username);


    List<User> findByNickName(String nickname);

    @Query("select u.userId from User u where u.oauthId=:oauthId")
    Long findUserId(@Param("oauthId") String oauthId);

    User findByOauthId(String oauthId);

    boolean existsByusername(String username);

}