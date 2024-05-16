1. Как включить бэк?

1) Создаем cmd terminal
2) cd backend

3.1) Если запускаешь в первый раз, то нужно создать оболочку и скачать библиотеки
python -m venv venv
venv\Scripts\activate
pip install requirements.txt

3.2) Если не в первый раз, то просто
venv\Scripts\activate

python manage.py migrate
python manage.py runserver

2. Пути в бэке
admin/ - админ панель (не нужно)
api/users/

	1) register/ - регистрация пользователя. Нужно отправлять поля email, username, password. Возвращает айди пользователя и все его данные.

api/token/ - логин пользователя. Нужно отправлять username, password. Возвращает refresh, access - два токена, которые нужно хранить на фронте и обновлять once in a while
api/token/refresh/ - обновление токена. Нужно отправить поле refresh. Возвращает новые refresh и access