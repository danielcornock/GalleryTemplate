<!-- MAIN GALLERY -->
<section id="gallery">
    <div class="container">
        <div class="gallery__content">
            <?php
                wp_reset_query();
                while (have_posts()) : the_post();
                    the_content();
                endwhile;
                // This is where the content from the default wordpress embed shortcode goes
            ?>
        </div>
    </div>
</section>
    
<!-- MODAL -->
<div class="gallery__modal">
    <div class="gallery__modal--loading">
        Loading image...
    </div>
    <img src="" alt="" class="modal__image">
    <div class="gallery__close"><i class="gallery__close__icon fas fa-times"></i></div>
    <div class="gallery__button gallery__button--left"><i class="gallery__icon fas fa-chevron-left"></i></div>
    <div class="gallery__button gallery__button--right"><i class="gallery__icon fas fa-chevron-right"></i></div>
</div>

<script src = "gallery.js"></script>