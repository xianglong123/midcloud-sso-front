FROM nginx:1.15
RUN rm /etc/nginx/conf.d/default.conf
COPY dist/ /usr/share/nginx/html
