package kr.bora.api.todo.service;

import kr.bora.api.todo.domain.Todo;
import kr.bora.api.todo.domain.TodoFile;
import kr.bora.api.todo.dto.TodoFileDto;
import kr.bora.api.todo.dto.request.TodoFileRequestDto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface TodoFileUploadService {

    List<TodoFileRequestDto> saveFile(List<MultipartFile> uploadFiles, Long todoId);

    void todoFileDelete(Long todoFileId);

    default TodoFileDto entityTodoFileDto(TodoFile todoFile) {
        TodoFileRequestDto users = TodoFileRequestDto.builder().build();
        return TodoFileDto.builder()
                .todoId(todoFile.getTodo().getTodoId())
                .userId(users.toFileDto(todoFile.getTodo().getTodoId()).getUserId())
                .todoFileId(todoFile.getId())
                .filename(todoFile.getFilename())
                .ofname(todoFile.getOfname())
                .uuid(todoFile.getUuid())
                .path(todoFile.getPath())
                .regDate(todoFile.getRegDate())
                .modDate(todoFile.getModDate())
                .build();
    }

    default TodoFile dtoTodoFileEntity(TodoFileRequestDto todoFileRequestDto) {
        return TodoFile.builder()
                .id(todoFileRequestDto.getTodoFileId())
                .filename(todoFileRequestDto.getFilename())
                .ofname(todoFileRequestDto.getOfname())
                .path(todoFileRequestDto.getPath())
                .uuid(todoFileRequestDto.getUuid())
                .todo(Todo.builder().todoId(todoFileRequestDto.getTodoId()).build())
                .user((todoFileRequestDto.getUserId()).saveId(todoFileRequestDto.getUserId()))
                .build();
    }
}
