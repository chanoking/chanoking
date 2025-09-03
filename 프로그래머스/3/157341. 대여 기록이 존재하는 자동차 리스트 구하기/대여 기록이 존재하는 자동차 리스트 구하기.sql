-- 코드를 입력하세요
SELECT a.car_id as CAR_ID
from car_rental_company_car as a
inner join car_rental_company_rental_history as b
on a.car_id = b.car_id
where a.car_type = "세단" and extract(month from b.start_date) = 10
group by 1
order by 1 desc;

# SELECT *
# from car_rental_company_car as a
# inner join car_rental_company_rental_history as b
# on a.car_id = b.car_id