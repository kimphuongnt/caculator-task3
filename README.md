# TypeScript vs JavaScript

TypeScript là JavaScript mà thêm các kiểu dữ liệu. *"TypeScript is a typed superset of JS"*

- **JavaScript**: dynamic typing, trình thông dịch JIT.
- **TypeScript**: hỗ trợ strongly typed, kiểm soát lỗi khi compile, hỗ trợ static typing

## Dynamic typing:
- Không khai báo kiểu.
- Đổi kiểu dữ liệu bất kì lúc nào khi thực thi.
- Lỗi được phát hiện khi chạy.

# useCallback vs useMemo

Là React hooks và sử dụng kỹ thuật memoization.

## useCallback:
Giữa những lần rerender không tạo mới mà lấy những cái đã tạo trước đó.

## useMemo:
Ghi nhớ kết quả mỗi lần re-render -> chỉ tính toán lại khi thay đổi giá trị.

Ví dụ:
const result = useMemo(() => { return a + b;}, [a,b]);
[a,b] là dependencies

- memoization lưu trữ kết quả trả về của các expensive function (là các function tốn nhiều thời gian để thực thi, vd function tính dãy số fibonaci. Chỉ lấy kết quả trả về cuối trả về cho người dùng, không phải thực thi lại code mà lấy từ lần chạy trước đó)
- hook là hàm, được react tạo sẵn để kết nối react state và lifecycle vào function component. Có các loại như useState, useEffect, useLayoutEffect, useContext, useReducer, useMemo, useCallback,…
