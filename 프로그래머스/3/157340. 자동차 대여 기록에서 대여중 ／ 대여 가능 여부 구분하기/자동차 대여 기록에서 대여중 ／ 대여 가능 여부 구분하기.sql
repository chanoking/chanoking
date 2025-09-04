# SELECT 
#     a.car_id AS CAR_ID,
#     CASE
#         WHEN '2022-10-16' BETWEEN a.start_date AND a.end_date 
#             THEN '대여중'
#         ELSE '대여 가능'
#     END AS AVAILABILITY
# FROM car_rental_company_rental_history as a 
# join (select c.car_id, max(c.start_date) as max_start_date from car_rental_company_rental_history as c where end_date <= '2022-10-16' group by c.car_id) as b
# on (a.car_id = b.car_id and a.start_date = b.max_start_date)
# GROUP BY a.car_id
# ORDER BY a.car_id DESC;

# select * from car_rental_company_rental_history
# order by car_id


# select distinct car_id, case
#                 when '2022-10-16' between start_date and end_date then "대여중" else "대여 가능" end as availability
# from car_rental_company_rental_history
# order by car_id desc;

select distinct car_id, case when car_id in (select car_id from car_rental_company_rental_history where '2022-10-16' between start_date and end_date) then "대여중" else "대여 가능" end as availability
from car_rental_company_rental_history
order by car_id desc
