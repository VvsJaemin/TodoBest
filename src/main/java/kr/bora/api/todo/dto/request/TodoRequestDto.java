package kr.bora.api.todo.dto.request;

import kr.bora.api.files.dto.FileDto;
import kr.bora.api.todo.domain.TodoPriorityType;
import kr.bora.api.todo.domain.TodoType;
import kr.bora.api.todo.dto.TodoUserDto;
import kr.bora.api.user.util.SecurityUtil;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotNull;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class TodoRequestDto {
    private Long todoId;

    private TodoUserDto userId;
    @NotNull(message = "제목은 필수 입력 값입니다.")
    private String title;
    @NotNull(message = "시작일은 필수 입력 값입니다.")
    private String start;
    @NotNull(message = "종료일은 필수 입력 값입니다.")
    private String end;
    @NotNull(message = "상세 할 일은 필수 입력 값입니다.")
    private String description;
    private String assignee;

    private TodoPriorityType priority;
    private Integer point = 0;

    private String doneTime;

    private String regDate;

    private String modDate;
    private String nickname;

    private TodoType todoType;

    private FileDto fileDto;

    private Long fileId;

    public TodoRequestDto toDto() {
        Long userId = SecurityUtil.getCurrentUserId();
        return TodoRequestDto.builder()
                .userId(TodoUserDto.builder().userId(userId).build()) //1
                .title(title)
                .start(start)
                .end(end)
                .description(description)
                .assignee(assignee)
                .priority(TodoPriorityType.BASIC)
                .point(point)
                .todoType(TodoType.TODO)
                .fileId(fileId)
                .build();
    }

    public String setNickname(String nickname) {
        this.nickname = nickname;
        return nickname;
    }

    public void setFileId(Long fileId) {
        this.fileId = fileId;
    }



}
