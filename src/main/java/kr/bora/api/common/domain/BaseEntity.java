package kr.bora.api.common.domain;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.*;
import java.time.LocalDateTime;

@MappedSuperclass
@EntityListeners(value = {AuditingEntityListener.class})
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
@Getter
public abstract class BaseEntity{

    @CreatedDate
    @Column(name = "reg_date", updatable = false)
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime regDate;

    @LastModifiedDate
    @Column(name = "mod_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDateTime modDate;


}
