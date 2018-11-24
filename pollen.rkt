#lang racket/base

(require pollen/decode txexpr)
(require pollen/tag)
(require scribble/manual)
(provide (all-defined-out))

(define (root . elements)
  (txexpr 'root empty (decode-elements elements
                                       #:txexpr-elements-proc decode-paragraphs)))

(define (title . parts)
  `(div ((class "title")) ,@parts))

(define (section . parts)
  `(div ((class "section")) ,@parts))

(define (subsection . parts)
  `(div ((class "subsection")) ,@parts))

(define (subsubsection . parts)
  `(div ((class "subsubsection")) ,@parts))

(define (scenario . parts)
  `(div ((class "scenario")) ,@parts))

(define (multi-paxos-example . parts)
  `(div ((class "multi-paxos-example")) ,@parts))

(define (slide . parts)
  `(div ((class "slide")) ,@parts))

(define (smaller-slide-text . parts)
  `(span ((class "smaller-slide-text")) ,@parts))

(define (bottom-container . parts)
  '(div ((id "bottom-control-container"))
		'(div ((id "section-title-container")))
		'(div ((id "progress-bar-container"))
			  '(input ((id "previous-slide-button") (type "button") (value "Previous") (onclick "previousSlide()")))
			  '(progress ((id "progress-bar") (max "100") (value "0")))
			  '(input ((id "next-slide-button") (type "button") (value "Next") (onclick "nextSlide()"))))
		'(div ((id "progress-text")))))
